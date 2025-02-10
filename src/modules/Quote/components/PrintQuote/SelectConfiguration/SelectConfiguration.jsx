// filepath: /c:/Users/mdeleon/OneDrive - Entidad Controladora SA de CV/Documentos/Marcelo/impresion-3d-mty-page/src/modules/Quote/components/PrintQuote/SelectConfiguration/SelectConfiguration.jsx
import { useContext, useEffect, useState } from "react";
import { supabase } from "../../../../../supabase/client";
import { QuoteContext } from "../../../context/QuoteContext";
import { Button } from "@mui/material";
import "./SelectConfiguration.css";

export default function SelectConfiguration() {
  const infillOptions = [
    { id: 1, infill: "20%" },
    { id: 2, infill: "40%" },
    { id: 3, infill: "60%" },
    { id: 4, infill: "80%" },
    { id: 5, infill: "100%" },
  ];
  const printLayerHeights = [
    { id: 1, layerHeight: "0.08mm" },
    { id: 2, layerHeight: "0.12mm" },
    { id: 3, layerHeight: "0.16mm" },
    { id: 4, layerHeight: "0.2mm" },
    { id: 5, layerHeight: "0.24mm" },
    { id: 6, layerHeight: "0.28mm" },
  ];
  const [colors, setColors] = useState(null);
  const {
    selectedMaterial,
    selectedColor,
    setSelectedColor,
    selectedInfill,
    setSelectedInfill,
    selectedLayerHeight,
    setSelectedLayerHeight,
  } = useContext(QuoteContext);

  useEffect(() => {
    getColors();
    reloadSelectedColor();
  }, [selectedMaterial]);

  const reloadSelectedColor = () => {
    if (selectedColor) {
      if (selectedColor.material_id != selectedMaterial.id) {
        setSelectedColor(null);
        setSelectedInfill(null);
        setSelectedLayerHeight(null);
      }
    }
  };

  const getColors = async () => {
    const { data, error } = await supabase
      .from("material_colors")
      .select("*")
      .eq("material_id", selectedMaterial.id);
    if (error) {
      console.error("Error fetching materials:", error);
      return;
    }

    setColors(data);
  };

  const handleColorSelection = (color) => {
    console.log("Color selected:", color);
    setSelectedColor(color);
  };

  const calculateGradientColor = (baseColor, index, total) => {
    const [r, g, b] = baseColor.split(",").map(Number);
    const factor = (total - 1 - index) / (total - 1);
    return `${Math.round(r + (255 - r) * factor)}, ${Math.round(
      g + (255 - g) * factor
    )}, ${Math.round(b + (255 - b) * factor)}`;
  };

  const primaryColor = "0, 119, 182";

  const getContrastColor = (rgbColor) => {
    const [r, g, b] = rgbColor.split(",").map(Number);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 160 ? "black" : "white";
  };

  return (
    <div className="select-component-container">
      {/* <div className="select-component-toolbar">
        <h1>Seleccionar Config</h1>
      </div> */}
      <h3>Seleccionar Color</h3>
      <div className="select-configuration-colors">
        {colors &&
          colors.map((color) => (
            <div className="select-configuration-color" key={color.id}>
              <button
                className="select-configuration-color-button"
                onClick={() => handleColorSelection(color)}
                style={{
                  backgroundColor: `#${color.color_hex}`,
                  cursor: "pointer",
                  color: getContrastColor(color.color_hex),
                }}
              >
                <span className="select-configuration-color-name">
                  {color.name ? color.name : "Color"}
                </span>
                {selectedColor && selectedColor.id === color.id && (
                  <span className="select-configuration-color-is-selected">
                    Seleccionado
                  </span>
                )}
              </button>
            </div>
          ))}
      </div>
      <div>
        {selectedColor && (
          <>
            <h3>Seleccionar Relleno</h3>
            <div className="select-configuration-infill">
              {infillOptions.map((infillOption, index) => (
                <button
                  className="select-configuration-infill-button"
                  key={infillOption.id}
                  style={{
                    backgroundColor: `rgb(${calculateGradientColor(
                      primaryColor,
                      index,
                      infillOptions.length
                    )})`,
                    cursor: "pointer",
                    color: getContrastColor(
                      calculateGradientColor(
                        primaryColor,
                        index,
                        infillOptions.length
                      )
                    ),
                  }}
                  onClick={() => setSelectedInfill(infillOption)}
                >
                  {infillOption.infill}
                  {selectedInfill && selectedInfill.id === infillOption.id && (
                    <span className="select-configuration-infill-is-selected">
                      S
                    </span>
                  )}
                </button>
              ))}
            </div>
            <div className="select-configuration-legends">
              <span>{"<"}- Menos resistencia</span>
              <span>Más resistencia -{">"}</span>
            </div>
          </>
        )}
      </div>
      <div>
        {(selectedInfill && selectedColor) && (
          <>
            <h3>Seleccionar Calidad</h3>
            <div className="select-configuration-layer-height">
              {printLayerHeights.map((layerHeight, index) => (
                <button
                  className="select-configuration-layer-height-button"
                  key={layerHeight.id}
                  style={{
                    backgroundColor: `rgb(${calculateGradientColor(
                      primaryColor,
                      index,
                      printLayerHeights.length
                    )})`,
                    cursor: "pointer",
                    color: getContrastColor(
                      calculateGradientColor(
                        primaryColor,
                        index,
                        printLayerHeights.length
                      )
                    ),
                  }}
                  onClick={() => setSelectedLayerHeight(layerHeight)}
                >
                  {layerHeight.layerHeight}
                  {selectedLayerHeight &&
                    selectedLayerHeight.id === layerHeight.id && (
                      <span className="select-configuration-infill-is-selected">
                        S
                      </span>
                    )}
                </button>
              ))}
            </div>
            <div className="select-configuration-legends">
              <span>{"<"}- Líneas de capa menos visibles</span>
              <span>Líneas de capa más visibles -{">"}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
