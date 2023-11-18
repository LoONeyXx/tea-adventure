import { useState, useCallback } from 'react';

export default function useFormAndValidation(initializeValues) {
    const [values, setValues] = useState(initializeValues);
    const [errorMessages, setErrorMessages] = useState({});
    const [isValid, setValid] = useState(false);

    const handleChangeInput = useCallback(
        e => {
            const { name, value } = e.target;
            setValues({ ...values, [name]: value });
            setErrorMessages({
                ...errorMessages,
                [name]: e.target.validationMessage,
            });
            setValid(e.target.closest('form').checkValidity());
            console.log(e.target.closest('form').checkValidity());
        },
        [values, errorMessages],
    );

    const handleLoadImage = useCallback(
        e => {
            const { name, value } = e.target;
            const allowedFormats = ['jpg', 'jpeg', 'png', 'svg'];
            const format = value.split('.').pop();
            const isValid = allowedFormats.includes(format);
            if (isValid) {
                setValues(prev => ({ ...prev, image: value }));
                setValid(e.target.closest('form').checkValidity());
            } else {
                setErrorMessages({
                    ...errorMessages,
                    [name]: e.target.validationMessage,
                });
                setValues(prev => ({ ...prev, image: '' }));
                setValid(false);
            }
        },
        [setValues, setValid],
    );
    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrorMessages(newErrors);
            setValid(newIsValid);
        },
        [setValues, setErrorMessages, setValid],
    );

    return {
        values,
        handleChangeInput,
        errorMessages,
        isValid,
        resetForm,
        setValues,
        setValid,
        handleLoadImage,
    };
}
