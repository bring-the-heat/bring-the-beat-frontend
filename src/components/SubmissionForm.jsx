import React, { useState } from 'react';
import styled from 'styled-components';

const SubmissionForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        songTitle: '',
        songLink: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formElement = document.querySelector("form");
        const formData = new FormData(formElement);
        fetch(
            "https://script.google.com/macros/s/AKfycbymTU7rMbkqNVzj2zbrfZs45yYW-MVrHCkCapKb86wdAxEKqc7vTBRly-wmwkKbEBUx_g/exec",
            { method: "POST", body: formData }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });

        console.log('Form data submitted:', formData);
    };

    return (
        <FormContainer>
            <h1>Enter your song for this week's round: </h1>
            <Form className="form" onSubmit={handleSubmit} method="POST" action="https://script.google.com/macros/s/AKfycbymTU7rMbkqNVzj2zbrfZs45yYW-MVrHCkCapKb86wdAxEKqc7vTBRly-wmwkKbEBUx_g/exec">
                <Input
                    type="text"
                    name="firstName"
                    placeholder="Your name 👀"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="text"
                    name="lastName"
                    placeholder="Last name too pls"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="text"
                    name="songTitle"
                    placeholder="Your song's title"
                    value={formData.songTitle}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="text"
                    name="songLink"
                    placeholder="Spotify song link"
                    value={formData.songLink}
                    onChange={handleChange}
                    required
                />
                <SubmitButton style={{marginTop: "100px"}} type="submit">SUBMIT</SubmitButton>
                <hr style={{
                    background: "#282c34",
                    width: "150px",
                    margin: "70px auto",
                }} />
            </Form>
        </FormContainer>
    );
};

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  background: radial-gradient(circle, #f6d604, #f87a00, #b9331c);
  color: #292c34;
  padding: 15px 25px;
  border: none;
  border-radius: 30px;
  box-shadow: 0 0 20px rgba(255, 182, 15, 0.7);
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  font-size: 25px;
  font-weight: 500;

  &:hover {
    box-shadow: 0 0 30px rgba(255, 182, 15, 0.9);
  }
`;

export default SubmissionForm;
