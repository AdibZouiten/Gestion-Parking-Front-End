import React from 'react'
import './LoginPage.css'
import { useState } from 'react';

function LoginPage() {
    const [nomUtil, setNomUtil] = useState('');
    const [prenUtil, setPrenUtil] = useState('');
    const [AdresseUtil, setAdresseUtil] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleNomUtilChange = (event) => {
        setNomUtil(event.target.value);
    };
    const handlePrenUtilChange = (event) => {
        setPrenUtil(event.target.value);
    };
    const handleAdresseUtilChange = (event) => {
        setAdresseUtil(event.target.value);
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
                    nomUtil,
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
                {/* nom d'utlisateur */}
                <div className='Login-form-row'>
                    <label className='login-text' htmlFor="nomUtil">Nom d'utilisateur :</label>
                </div>
                <div className='Login-form-row'>
                    <input
                        type="text"
                        id="nomUtil"
                        value={nomUtil}
                        onChange={handleNomUtilChange}
                    />
                </div>
                {/* prenom d'utilisateur */}
                <div className='Login-form-row'>
                    <label className='login-text' htmlFor="prenUtil">Prenom d'utilisateur :</label>
                </div>
                <div className='Login-form-row'>
                    <input
                        type="text"
                        id="prenUtil"
                        value={prenUtil}
                        onChange={handlePrenUtilChange}
                    />
                </div>

                {/* Adresse utlisateur  */}
                <div className='Login-form-row'>
                    <label htmlFor="AdresseUtil">Adresse Utilisateur :</label>
                </div>
                <div className='Login-form-row'>
                    <input
                        type="text"
                        id="AdresseUtil"
                        value={AdresseUtil}
                        onChange={handleAdresseUtilChange}
                    />
                </div>
                {/* password utilisateur */}
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
