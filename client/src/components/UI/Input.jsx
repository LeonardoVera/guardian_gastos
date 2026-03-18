import './Input.css'

export default function Input({ label, type, placeholder, id }) {
    return (
        <div className="input-group">
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} placeholder={placeholder} />
        </div>
    )
}