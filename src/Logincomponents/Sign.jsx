import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Logincomponents/Sign.css';

const Sign = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [err, setErr] = useState({});

    const registerUser = async (e) => {
        e.preventDefault();
        let Error = {};

        if (!username) {
            Error.username = "Username is required";
        } else if (Number(username)) {
            Error.username = "Username must be alphabetical";
        }

        if (!email) {
            Error.email = "Email is required";
        }

        if (!contact) {
            Error.contact = "Contact number is required";
        }

        if (!password) {
            Error.password = "Password is required";
        }

        if (password !== confirmpassword) {
            Error.confirmpassword = "Passwords do not match";
        }

        setErr(Error);

        if (Object.keys(Error).length === 0) {
            try {
                const response = await axios.post("http://localhost:5000/user/insert", {
                    username, email, contact, password
                });
                console.log(response.data);
                alert("Registration successful");
                window.location.href = '/Login';
            } catch (error) {
                console.log(error);
                alert("Registration failed");
            }
        }
    };

    return (
        <div className="Sign">
            <form method="post" onSubmit={registerUser}>
                <h3>INT Tours & Travels</h3>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        type="text"
                        required
                        name="username"
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        style={{ textTransform: "capitalize" }}
                    />
                    <span className="error">{err.username}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail ID:</label>
                    <input
                        id="email"
                        type="email"
                        required
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail ID"
                    />
                    <span className="error">{err.email}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="contact">Contact:</label>
                    <input
                        id="contact"
                        type="tel"
                        name="contact"
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="Phone number"
                    />
                    <span className="error">{err.contact}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        required
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <span className="error">{err.password}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmpassword">Confirm Password:</label>
                    <input
                        id="confirmpassword"
                        type="password"
                        required
                        name="confirmpassword"
                        onChange={(e) => setConfirmpassword(e.target.value)}
                        placeholder="Confirm Password"
                    />
                    <span className="error">{err.confirmpassword}</span>
                </div>
                <div className="form-group submit">
                    <button type="submit">Sign Up</button>
                    <Link to="/Login" className="login-link">Already have an account? Login</Link>
                </div>
            </form>
        </div>
    );
};

export default Sign;
