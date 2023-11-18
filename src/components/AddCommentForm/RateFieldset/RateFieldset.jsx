import './RateFieldset.sass';

function RateFieldset({ onChange, values, form }) {
    return (
        <fieldset form={form} className="rate">
            <input
                className={`rate__input ${
                    values.rate > 1 && 'rate__input_active'
                }`}
                type="radio"
                required
                name="rate"
                value="1"
                onChange={onChange}
            />
            <input
                className={`rate__input ${
                    values.rate > 2 && 'rate__input_active'
                }`}
                type="radio"
                required
                name="rate"
                value="2"
                onChange={onChange}
            />
            <input
                className={`rate__input ${
                    values.rate > 3 && 'rate__input_active'
                }`}
                type="radio"
                name="rate"
                required
                value="3"
                onChange={onChange}
            />
            <input
                className={`rate__input ${
                    values.rate > 4 && 'rate__input_active'
                }`}
                type="radio"
                required
                name="rate"
                value="4"
                onChange={onChange}
            />
            <input
                className={`rate__input ${
                    values.rate > 5 && 'rate__input_active'
                }`}
                type="radio"
                required
                name="rate"
                value="5"
                onChange={onChange}
            />
        </fieldset>
    );
}
export default RateFieldset;
