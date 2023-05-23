const validate = (form) => {
    let errors = {};
    if (!form.name) {
        errors.name = 'Name is required';
    } else if (!/[a-zA-Zа-яА-ЯїЇєЄіІ'’]/.test(form.name)) {
        errors.name = 'Name cannot consist only of numbers';
    }
    if (!form.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!form.phone) {
        errors.phone = 'Phone number is required';
    } else if (!/^(\d{12})$/.test(form.phone)) {
        errors.phone = 'Phone number must be exactly 12 digits';
    }
    return errors;
};

export default validate;

