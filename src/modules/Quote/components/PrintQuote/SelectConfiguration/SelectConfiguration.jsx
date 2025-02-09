// filepath: /c:/Users/mdeleon/OneDrive - Entidad Controladora SA de CV/Documentos/Marcelo/impresion-3d-mty-page/src/modules/Quote/components/PrintQuote/SelectConfiguration/SelectConfiguration.jsx
import { useContext, useEffect, useState } from "react";
import { supabase } from "../../../../../supabase/client";
import { QuoteContext } from "../../../context/QuoteContext";
import { Button } from "@mui/material";

export default function SelectConfiguration() {
  const infillOptions = [
    { id: 1, infill: "20%" },
    { id: 2, infill: "40%" },
    { id: 3, infill: "60%" },
    { id: 4, infill: "80%" },
    { id: 5, infill: "100%" },
  ];
  const printQualityOptions = [
    { id: 1, layerHeight: "0.08" },
    { id: 2, layerHeight: "0.12" },
    { id: 3, layerHeight: "0.16" },
    { id: 4, layerHeight: "0.2" },
    { id: 5, layerHeight: "0.24" },
    { id: 6, layerHeight: "0.28" },
  ]
  const [colors, setColors] = useState(null);
  const { selectedMaterial, selectedColor, setSelectedColor, selectedInfill, setSelectedInfill, selectedLayerHeight, setSelectedLayerHeight } =
    useContext(QuoteContext);

  useEffect(() => {
    getColors();
    reloadSelectedColor();
  }, [selectedMaterial]);

  const reloadSelectedColor = () => {
    if (selectedColor) {
      if (selectedColor.material_id != selectedMaterial.id) {
        setSelectedColor(null);
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

  return (
    <div>
      <h1>Select Configuration</h1>
      {colors &&
        colors.map((color) => (
          <button
            key={color.id}
            onClick={() => handleColorSelection(color)}
            style={{
              backgroundColor: `#${color.color_hex}`,
              width: "50px",
              height: "50px",
              margin: "5px",
              border:
                selectedColor && selectedColor.color_hex === color.color_hex
                  ? "2px solid #000"
                  : "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            <span style={{ color: "#fff" }}>{color.id}</span>
          </button>
        ))}
      {selectedColor && (
        <>
          {infillOptions.map((infillOption) => (
            <Button key={infillOption.id} onClick={() => setSelectedInfill(infillOption.infill)}>{infillOption.infill}</Button>
          ))}
        </>
      )}
      {selectedInfill && (
        <>
        {printQualityOptions.map((printQualityOption) => (
            <Button key={printQualityOption.id} onClick={() => setSelectedLayerHeight(printQualityOption.layerHeight)}>{printQualityOption.layerHeight}</Button>
        ))}
        </>
      )}
      {selectedLayerHeight && (
        <>{selectedLayerHeight}</>
      )}
      {/* <div>
        <h2>Selected Color</h2>
        {selectedColor && <p>Color: {selectedColor.color_hex}</p>}
      </div> */}
    </div>
  );
}
