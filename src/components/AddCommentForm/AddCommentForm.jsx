import { useEffect } from 'react';
import Button from '../Button/Button';
import './AddCommentForm.sass';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import Form from '../Form/Form';
import RateFieldset from './RateFieldset/RateFieldset';

function AddCommentForm() {
    const { values, isValid, handleChangeInput } = useFormAndValidation({
        name: '',
        rate: '',
        comment: '',
    });
    const onSubmit = () => {
        console.log(values);
    };
    useEffect(() => {
        console.log(values);
    }, [values]);
    return (
        <Form
            name="add-comment"
            onSubmit={onSubmit}
            title="Оставить комментарий"
        >
            <label htmlFor="name" className="form__label">
                Имя
                <input
                    id="name"
                    required
                    name="name"
                    minLength="2"
                    placeholder="Имя"
                    value={values.name}
                    onChange={handleChangeInput}
                    type="text"
                    className="form__input"
                />
            </label>
            <label htmlFor="comment" className="form__label">
                Комментарий
                <textarea
                    minLength="2"
                    id="comment"
                    required
                    name="comment"
                    value={values.comment}
                    placeholder="Комментарий"
                    type="text"
                    onChange={handleChangeInput}
                    className="form__input"
                />
            </label>
            <h4 className="form__rate-title" htmlFor="rate-fieldset">
                Оценка
            </h4>
            <RateFieldset
                values={values}
                onChange={handleChangeInput}
                form="add-comment"
            />
            <Button
                place="comments"
                type="add"
                text="Оставить"
                disabled={!isValid}
            />
        </Form>
    );
}
export default AddCommentForm;
