import React from 'react';

function Form({ form, errors, handleChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
            {errors.name && <p>{errors.name}</p>}

            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
            {errors.email && <p>{errors.email}</p>}

            <input type="tel" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
            {errors.phone && <p>{errors.phone}</p>}

            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
