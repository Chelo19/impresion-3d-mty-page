// filepath: /c:/Users/mdeleon/OneDrive - Entidad Controladora SA de CV/Documentos/Marcelo/impresion-3d-mty-page/src/modules/Quote/components/PrintQuote/SelectMaterials/SelectMaterials.jsx
import { useEffect, useState } from "react";
import { supabase } from "../../../../../supabase/client";
import MaterialCard from "../MaterialCard/MaterialCard";
import "./SelectMaterial.css";

export default function SelectMaterials({
  selectedMaterial,
  setSelectedMaterial,
}) {
  const [materials, setMaterials] = useState(null);
  const [colors, setColors] = useState(null);
  const [sortOrder, setSortOrder] = useState("cpu-asc");

  useEffect(() => {
    getMaterials();
    getColors();
  }, []);

  useEffect(() => {
    console.log("Actualizacion de selectedMaterial", selectedMaterial);
  }, [selectedMaterial]);

  const getMaterials = async () => {
    const { data, error } = await supabase.from("material_specs").select("*");
    if (error) {
      console.error("Error fetching materials:", error);
      return;
    }

    setMaterials(data);
  };

  const getColors = async () => {
    const { data, error } = await supabase.from("material_colors").select("*");
    if (error) {
      console.error("Error fetching materials:", error);
      return;
    }

    setColors(data);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortedMaterials = materials
    ? materials.sort((a, b) => {
        switch (sortOrder) {
          case "cpu-asc":
            return a.cpu - b.cpu;
          case "cpu-desc":
            return b.cpu - a.cpu;
          case "name-asc":
            return a.material.localeCompare(b.material);
          case "name-desc":
            return b.material.localeCompare(a.material);
          default:
            return 0;
        }
      })
    : [];

  return (
    <div className="select-component-container">
      <div className="select-component-toolbar">
        <span className="step-title">Seleccionar Material</span>
        <div>
          <span className="select-material-order">Ordenar por: </span>
          <select
            onChange={handleSortOrderChange}
            value={sortOrder}
            className="select-material-order-select"
          >
            <option value="cpu-asc">CPU ascendente</option>
            <option value="cpu-desc">CPU descendente</option>
            <option value="name-asc">Nombre A-Z</option>
            <option value="name-desc">Nombre Z-A</option>
          </select>
        </div>
      </div>
      {sortedMaterials.length > 0 ? (
        sortedMaterials.map((material) => (
          <MaterialCard
            key={material.id}
            material={material}
            colors={
              colors
                ? colors.filter((color) => color.material_id === material.id)
                : []
            }
          />
        ))
      ) : (
        <p>No se encontraron materiales con el filtro aplicado.</p>
      )}
    </div>
  );
}
