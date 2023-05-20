import React from 'react'
import './LoginPage.css'
import { useState } from 'react';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('api/Inscription', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            if (response.ok) {
                // Stockage réussi, rediriger vers la page d'accueil
                window.location.href = '/Home';
            } else {
                setError('Une erreur s\'est produite lors du stockage des données.');
            }
        } catch (error) {
            setError('Une erreur s\'est produite. Veuillez réessayer.');
        }
    };
    return (
        <div className='Login'>
            <div className='Login-form-row'>
                <h1>Connexion</h1>
            </div>
            {error && <p>{error}</p>}
            <form className='Login-form' onSubmit={handleSubmit}>

                <div className='Login-form-row'>
                    <label className='login-text' htmlFor="username">Identifiant:</label>
                </div>
                <div className='Login-form-row'>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>


                <div className='Login-form-row'>
                    <label htmlFor="password">Mot de passe:</label>
                </div>
                <div className='Login-form-row'>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>

                <div className='Login-form-row'>
                    <button className='button-login' type="submit">Se connecter</button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;
