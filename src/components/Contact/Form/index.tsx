'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.scss';

function Form() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [statusMessage, setStatusMessage] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatusMessage(undefined);
    }, 5000);
    return () => clearTimeout(timer);
  }, [statusMessage]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      Name: name,
      Email: email,
      Message: message,
    };

    axios
      .post('https://sheet.best/api/sheets/7afb9039-e979-475e-a51e-776dce6b7d2a', formData)
      .then((res) => {
        console.log(res);
        if (res.status !== 200) {
          setStatusMessage(false);
        } else {
          setStatusMessage(true);
        }
      })
      .catch((err) => {
        console.error(err);
        setStatusMessage(false);
      });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="form-wrapper">
      <span className="box"></span>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          required
        />
        <div className="button-wrapper">
          <button className="button" type="submit">Submit</button>
          {statusMessage === undefined ? (
            <span></span>
          ) : statusMessage ? (
            <span className="message-status">😊 Your message has been received, thank you..</span>
          ) : (
            <span className="message-status">🙁 Something went wrong, sorry your message failed to send..</span>
          )}
        </div>
      </form>
    </div>
  );
}

export default Form;
