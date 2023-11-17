import "./CirecleColor.sass";

function CirecleColor({ color, place, isActive = true }) {
  return (
    <li
      style={{ backgroundColor: color }}
      className={`circle-color circle-color_${color} circle-color_place_${place} ${
        place === "menu" && isActive && "circle-color_active"
      }`}
    ></li>
  );
}
export default CirecleColor;
