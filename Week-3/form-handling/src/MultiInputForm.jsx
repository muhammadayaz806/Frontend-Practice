import {useState} from 'react';

function MultiInputForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

  return (
    <form onSubmit={handleSubmit}>
        <h1>Multiple Inputs Form Example</h1>

        <label>Name: </label>
        <input name="name" type="text" value={formData.name} onChange={handleChange}/>

        <br />

        <label>Email: </label>
        <input name="email" type="email" value={formData.email} onChange={handleChange}/>

        <br />

        <label>Age: </label>
        <input name="age" type="number" value={formData.age} onChange={handleChange}/>

        <br />

        <button type="submit">Submit</button>
    </form>
  )
}

export default MultiInputForm