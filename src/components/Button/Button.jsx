import './Button.sass';

function Button({ disabled, place, type, text }) {
    return (
        <button
            disabled={disabled}
            className={`button button_place_${place} button_type_${type}`}
        >
            {text}
        </button>
    );
}
export default Button;
