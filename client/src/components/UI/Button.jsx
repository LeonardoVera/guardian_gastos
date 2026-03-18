import './Button.css'
export default function Button({ text, type }) {
    return (
        <button className={`btn btn-${type}`}>
            {text}
        </button>
    )
}