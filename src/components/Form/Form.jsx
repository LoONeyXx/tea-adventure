import './Form.sass';

function Form({ title, name, onSubmit = null, children }) {
    const handleSubmit = e => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit();
        }
    };
    return (
        <form
            encType="multipart/form-data"
            autoComplete="false"
            className={`form form_${name}`}
            onSubmit={handleSubmit}
        >
            {title && (
                <h3 className={`form__title form__title_${name}`}>{title}</h3>
            )}
            {children}
        </form>
    );
}
export default Form;
