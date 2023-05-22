
import React, { useContext, useState } from 'react';
import axios from 'axios';
import './LoginPage.css'
import { AuthContext } from '../../pages/AuthContext';


const LoginPage = () => {
    const { setIsLoggedIn } = useContext(AuthContext);
    const [adresseUtil, setEmail] = useState('');
    const [pass, setPassword] = useState('');
    const [error, setError] = useState('');

        
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://127.0.0.1:8000/api/login', { adresseUtil, pass })
            .then((response) => {
                setIsLoggedIn(true)
                console.log(response.data);
                setError(response.data.message)

            }).catch((error) => {
                console.error(error)
                console.log(error.response.data);
                setIsLoggedIn(false); 
            });
    };

    return (
        <div className='cont'>
        <div className='Login'>
            <div className='Login-form-row'>
                <h2>Connexion</h2>
            </div>
            {error && <div className='Login-form-row' style={{ color: 'red' }}>{error}</div>}
            <form className='Login-form' onSubmit={handleSubmit}>
                <div className='Login-form-row'>
                    <label>Email:</label>
                    <input type="email" value={adresseUtil} onChange={handleEmailChange} />
                </div>
                <div className='Login-form-row'>
                    <label>Mot de passe:</label>
                    <input type="password" value={pass} onChange={handlePasswordChange} />
                </div>
                <div className='Login-form-row'>
                    <button className='button-login' type="submit">Se connecter</button>
                </div>
            </form>
        </div>
        </div>
    );
}

export default LoginPage;
