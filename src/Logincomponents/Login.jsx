import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import { cartContext } from '../App';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState({});
    const { uid, setUid, cardlist, setCardlist } = useContext(cartContext);
    const [loggedIn, setLoggedIn] = useState(false); // State to track login status
    const navigate = useNavigate();

    const LoginUser = async (e) => {
        e.preventDefault();
        let Error = {};

        if (!email) {
            Error.email = "Email is required";
        }
        if (!password) {
            Error.password = "Password is required";
        }
        setErr(Error);

        if (email && password) {
            try {
                const response = await axios.post("http://localhost:5000/user/login", { email, password });
                console.log(response.data);

                if (response.data.userFound) {
                    const { userid, cardlist: fetchedCardlist } = response.data;

                    localStorage.setItem('userid', userid);
                    localStorage.setItem('cardid', JSON.stringify(fetchedCardlist));

                    setUid(userid);
                    setCardlist(fetchedCardlist);
                    setLoggedIn(true); // Update login status

                    alert("Login successful");
                    navigate('/Home');
                } else {
                    alert("Login failed: " + response.data.message);
                }
            } catch (error) {
                console.error("Error:", error);
                alert("Login failed");
            }
        }
    };

    const LogoutUser = () => {
        // Clear local storage and state
        localStorage.removeItem('userid');
        localStorage.removeItem('cardid');
        setUid(null);
        setCardlist([]);
        setLoggedIn(false); // Update login status
        alert("Logged out successfully");
        navigate('/Login'); // Redirect to login page
    };

    return (
        <div className='Login-Page'>
            <div className='Login-im'>
                <h1>INT Tours & Travels</h1>
            </div>
            {!loggedIn ? (
                <form onSubmit={LoginUser}>
                    <div className='Login-card'>
                        <div className='Login-mail'>
                            <label htmlFor="email">E-mail Id:</label>
                            <input 
                                type="email" 
                                required
                                id="email"
                                placeholder='E-mail Id' 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                            <span>{err.email}</span>
                        </div>
                        <div className='Login-pass'>
                            <label htmlFor="password">Password:</label>
                            <input 
                                type="password"
                                required
                                id="password"
                                placeholder='Password' 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                            <span>{err.password}</span>
                        </div>
                        <div className='Login-butt'>
                            <button type="submit">Login</button><br />
                        </div>
                        <hr />
                        <div className='Login-accbutt'>
                            <button>
                                <Link to='/Sign'>Create a new account</Link>
                            </button>
                        </div>
                    </div>
                </form>
            ) : (
                <div>
                    <h2>Welcome back!</h2>
                    <button onClick={LogoutUser} style={{ background: 'red', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer' }}>
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}

export default Login;
