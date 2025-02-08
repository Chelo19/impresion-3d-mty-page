// filepath: /c:/Users/mdeleon/OneDrive - Entidad Controladora SA de CV/Documentos/Marcelo/impresion-3d-mty-page/src/modules/Quote/components/PrintQuote/SelectMaterials/SelectMaterials.jsx
import { useEffect, useState } from "react";
import { supabase } from "../../../../../supabase/client";
import "./SelectMaterial.css";

export default function SelectMaterials({ selectedMaterial, setSelectedMaterial }) {
  const [materials, setMaterials] = useState(null);

  useEffect(() => {
    getMaterials();
  }, []);

  useEffect(() => {
    console.log('Actualizacion de selectedMaterial', selectedMaterial);
  }, [selectedMaterial]);

  const getMaterials = async () => {
    const { data, error } = await supabase.from("material_specs").select("*");
    if (error) {
      console.error("Error fetching materials:", error);
      return;
    }

    setMaterials(data);
  };

  const handleMaterialSelection = (material) => {
    console.log("Material selected:", material);
    setSelectedMaterial(material);
  };

  return (
    <div>
      <h1>Select Materials</h1>
      <div className="select-material-container">
        {materials && materials.map((material) => (
          <button
            onClick={() => handleMaterialSelection(material)}
            key={material.id}
            style={{
              backgroundColor: selectedMaterial.id === material.id ? "#d3d3d3" : "#fff",
              border: selectedMaterial.id === material.id ? "2px solid #000" : "1px solid #ccc",
              padding: "10px",
              margin: "5px",
              cursor: "pointer"
            }}
          >
            <h2>{material.material}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}