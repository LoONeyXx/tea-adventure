import './AddTea.sass';
import Section from '../../components/Section/Section';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/Form';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import Button from '../../components/Button/Button';
import TypeOfTeaFieldset from '../../components/TypeOfTeaFieldset/TypeOfTeaFieldset';
import { useEffect } from 'react';
import Breakline from '../../components/Break-line/BreakLine';
import CardOfTea from '../../components/CardOfTea/CardOfTea';
function AddTea() {
    const {
        values,
        handleChangeInput,
        isValid,
        handleLoadImage,
        handleCheckbox,
    } = useFormAndValidation({
        title: '',
        description: '',
        id: '',
        categorie: '',
        isNew: false,
        country: 'test',
        image: '',
    });
    useEffect(() => {
        console.log(values);
    }, [values]);
    return (
        <>
            <Header />
            <Content place="add-new-tea">
                <Section name="add-new-tea" title="Добавить чай">
                    <Form name="add-tea">
                        <label htmlFor="name" className="form__label">
                            Название
                            <input
                                id="title"
                                required
                                name="title"
                                minLength="2"
                                placeholder="Имя"
                                value={values.title}
                                onChange={handleChangeInput}
                                type="text"
                                className="form__input"
                            />
                        </label>
                        <label htmlFor="description" className="form__label">
                            Описание
                            <textarea
                                minLength="2"
                                id="description"
                                required
                                name="description"
                                value={values.description}
                                placeholder="Комментарий"
                                type="text"
                                onChange={handleChangeInput}
                                className="form__input"
                            />
                        </label>
                        <label className="form__label" name="isNew">
                            Новинка
                            <input
                                type="checkbox"
                                name="isNew"
                                onChange={handleCheckbox}
                                className="form__new-checkbox"
                            />
                        </label>
                        <Breakline />
                        <label className="form__label" name="file">
                            Загрузить Изображение
                            <input
                                type="file"
                                name="image"
                                required
                                value={values.image}
                                onChange={handleLoadImage}
                                className="form__file-input"
                            />
                        </label>
                        <Breakline />
                        <TypeOfTeaFieldset
                            form="add-tea"
                            onChange={handleChangeInput}
                        />
                        <Button
                            place="add-new-tea"
                            type="add"
                            text="Добавить"
                            disabled={!isValid}
                        />
                    </Form>
                </Section>
                <Section name="example-of-tea">
                    <CardOfTea place="add-tea" {...values} />
                </Section>
            </Content>
            <Footer />
        </>
    );
}
export default AddTea;
