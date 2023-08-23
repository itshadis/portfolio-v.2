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
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Name'
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'
          />
        </div>
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder='Message'
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form;