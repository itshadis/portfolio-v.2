import React, { useState } from 'react';
import './index.scss';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan sesuatu dengan data yang diisi dalam formData
    console.log(formData);
    // Contoh: Kirim data ke server, lakukan validasi, dll.
  }
  return (
    <div className='form-wrapper'>
      <span className='box'></span>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder='Name'
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder='Message'
        />
        <div className='button-wrapper'>
          <button className='button' type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form;