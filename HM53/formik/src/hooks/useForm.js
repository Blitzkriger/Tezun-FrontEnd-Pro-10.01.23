import { useState } from 'react';
import validate from '../utils/validate';

function useForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(form);
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            setSubmittedData(form);
        }
    };

    return { form, errors, submittedData, handleChange, handleSubmit };
}

export default useForm;
