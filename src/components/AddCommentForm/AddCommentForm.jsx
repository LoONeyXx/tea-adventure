import './AddCommentForm.sass';

function AddCommentForm(props) {
    return (
        <form className="add-comment-form">
            <label htmlFor="name" className="add-comment-form__label">
                Имя
                <input
                    id="name"
                    type="text"
                    className="add-comment-form__input"
                />
            </label>
            <label htmlFor="comment" className="add-comment-form__label">
                Комментарий
                <input
                    id="comment"
                    type="text"
                    className="add-comment-form__input"
                />
            </label>
        </form>
    );
}
export default AddCommentForm;
