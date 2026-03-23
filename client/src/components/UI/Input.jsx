import "./Input.css";

export default function Input({ label, type, placeholder, id, options, onChange }) {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      {type === "select" ? (
        <select id={id} onChange={onChange}>
          <option value="">Selecciona una categoría</option>
          {options?.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      ) : (
        <input id={id} type={type} placeholder={placeholder} onChange={onChange} />
      )}
    </div>
  );
}
