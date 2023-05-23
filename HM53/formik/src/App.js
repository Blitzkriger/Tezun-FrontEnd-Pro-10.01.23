import React from 'react';
import './App.css'; 
import Form from './components/Form';
import useForm from './hooks/useForm';

function App() {
    const { form, errors, submittedData, handleChange, handleSubmit } = useForm();

    return (
        <div>
            {!submittedData ? (
                <Form form={form} errors={errors} handleChange={handleChange} handleSubmit={handleSubmit} />
            ) : (
                <div className="submitted-data">
                    <h2>Data submitted successfully!</h2>
                    <ul>
                        <li><strong>Name:</strong> {submittedData.name}</li>
                        <li><strong>Email:</strong> {submittedData.email}</li>
                        <li><strong>Phone:</strong> {submittedData.phone}</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default App;


