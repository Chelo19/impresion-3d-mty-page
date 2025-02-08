// filepath: /c:/Users/mdeleon/OneDrive - Entidad Controladora SA de CV/Documentos/Marcelo/impresion-3d-mty-page/src/modules/Quote/components/PrintQuote/SelectConfiguration/SelectConfiguration.jsx
import { useContext, useEffect, useState } from "react";
import { supabase } from "../../../../../supabase/client";
import { QuoteContext } from "../../../context/QuoteContext";

export default function SelectConfiguration() {
  const [colors, setColors] = useState(null);
  const { selectedMaterial, selectedColor, setSelectedColor } = useContext(QuoteContext);

  useEffect(() => {
    getColors();
  }, [selectedMaterial]);

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
              border: selectedColor && selectedColor.color_hex === color.color_hex ? "2px solid #000" : "1px solid #ccc",
              cursor: "pointer"
            }}
          >
            <span style={{ color: "#fff" }}>{color.id}</span>
          </button>
        ))}
      <div>
        <h2>Selected Configuration</h2>
        {selectedColor && <p>Color: {selectedColor.color_hex}</p>}
      </div>
    </div>
  );
}