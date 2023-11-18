import './TypeOfTeaFieldset.sass';

function TypeOfTeaFieldset({ onChange }) {
    return (
        <fieldset className="type-of-tea">
            <label className="type-of-tea__label">
                Хейча
                <input
                    type="radio"
                    required
                    onChange={onChange}
                    name="categorie"
                    value="Хейча"
                    className="type-of-tea__input"
                />
            </label>
            <label className="type-of-tea__label">
                Красный
                <input
                    type="radio"
                    onChange={onChange}
                    name="categorie"
                    value="Красный"
                    required
                    className="type-of-tea__input"
                />
            </label>
            <label className="type-of-tea__label">
                Зеленый
                <input
                    type="radio"
                    onChange={onChange}
                    name="categorie"
                    required
                    value="Зеленый"
                    className="type-of-tea__input"
                />
            </label>
            <label className="type-of-tea__label">
                Белый
                <input
                    type="radio"
                    onChange={onChange}
                    required
                    name="categorie"
                    value="Белый"
                    className="type-of-tea__input"
                />
            </label>
            <label className="type-of-tea__label">
                Улун
                <input
                    type="radio"
                    onChange={onChange}
                    name="categorie"
                    value="Улун"
                    required
                    className="type-of-tea__input"
                />
            </label>
            <label className="type-of-tea__label">
                Пуэр
                <input
                    type="radio"
                    onChange={onChange}
                    name="categorie"
                    required
                    value="Пуэр"
                    className="type-of-tea__input"
                />
            </label>
            <label className="type-of-tea__label">
                Добавки
                <input
                    type="radio"
                    onChange={onChange}
                    required
                    name="categorie"
                    value="Добавки"
                    className="type-of-tea__input"
                />
            </label>
        </fieldset>
    );
}
export default TypeOfTeaFieldset;
