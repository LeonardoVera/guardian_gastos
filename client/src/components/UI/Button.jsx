import './Button.css'
export default function Button({ text, type, onClick }) {
    return (
        <button className={`btn btn-${type}`} onClick={onClick}>
            {text}
        </button>
    )
}