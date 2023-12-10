import React from 'react';
import "./contact.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

export const Contact = () => {

  const navigate = useNavigate();

  return (
    <div className="contact-page">
      <h1> contact</h1>
      <form
      /*action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"*/
    >
      <div>
        <TextField id="outlined-basic"  label="Your name" name="name" required variant="outlined"/>
      </div>
      <br/>
      <div>
        <TextField id="outlined-basic"  label="Email" name="email" required variant="outlined"/>
      </div>
      <br/>
      <div>
        <TextField id="outlined-basic"  label="Your Message" name="message" required  variant="outlined"/>
      </div>
      <br/>
      <div>
        <Button variant="contained" algin="center"> Send a message </Button>
      </div>
    </form>


    <br/>
    <br/>
    
    <div className="Details-btn">
  <Button variant="contained" onClick={() => navigate("/")}> Back </Button>
  </div>
    </div>
  );
};
