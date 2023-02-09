
import React, { useState } from "react";
import { Link } from "react-router-dom";

//import {Form} from "react-bootstrap/Form";

import clapper from '../components/images/clapper.jpg';

// function Login () {
function Login () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="loginForm">
            <form onSubmit={handleSubmit} controlId="email">
                <label className="labels">Email:<br></br>
                    <input
                        type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label><br></br>
                <label className="labels">Password:<br></br>
                    <input
                        type="text" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label><br></br><br></br>
                <Link to="/home">
                <button className="loginbtn" type="submit" disabled={!validateForm()}>
                    <img src={clapper} alt=''/> 
                </button>
                </Link>
            </form>
        </div>
      );
    }
    
   

        
export default Login;