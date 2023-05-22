
// import React, { useContext, useState } from 'react';
// import axios from 'axios';
// import './LoginPage.css'
// import { AuthContext } from '../../pages/AuthContext';
// // import { useHistory } from 'react-router-dom';


// const LoginPage = () => {
//     const { setIsLoggedIn } = useContext(AuthContext);
//     const [adresseUtil, setEmail] = useState('');
//     const [pass, setPassword] = useState('');
//     const [error, setError] = useState('');


//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         axios.post('http://127.0.0.1:8000/api/login', { adresseUtil, pass })
//             .then((response) => {
//                 setIsLoggedIn(true)
//                 console.log(response.data);
//                 setError(response.data.message)
//                 window.location.href = '/Ajouter';

//             }).catch((error) => {
//                 console.error(error)
//                 console.log(error.response.data);
//                 setIsLoggedIn(false); 
//             });
//     };

//     return (
//         <div className='cont'>
//         <div className='Login'>
//             <div className='Login-form-row'>
//                 <h2>Connexion</h2>
//             </div>
//             {<div className='Login-form-row' style={{ color: 'red' }}>{error}</div>}
// <form className='Login-form' onSubmit={handleSubmit}>
//     <div className='Login-form-row'>
//         <label>Email:</label>
//         <input type="email" value={adresseUtil} onChange={handleEmailChange} />
//     </div>
//     <div className='Login-form-row'>
//         <label>Mot de passe:</label>
//         <input type="password" value={pass} onChange={handlePasswordChange} />
//     </div>
//     <div className='Login-form-row'>
//         <button className='button-login' type="submit">Se connecter</button>
//     </div>
// </form>
//         </div>
//         </div>
//     );
// }

// export default LoginPage;
import React, { useContext, useState } from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
}
    from 'mdb-react-ui-kit';
import './LoginPage.css'
import { AuthContext } from '../../pages/AuthContext';
import axios from 'axios';

function LoginPage() {
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
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
            <h1 className="text-center text-2xl font-bold text-yellow-400 sm:text-3xl">
            Welcome to our Parking Management Software
            </h1>

            <p className="mx-auto mt-4 max-w-md text-center text-white">
            Gérer un stationnement peut être un défi, mais avec notre puissant
            logiciel, c’est un jeu d’enfant. Notre plateforme est conçue pour
            la gestion des parkings, pour vous faciliter la tâche
            pour gérer votre entreprise efficacement.
            </p>

            <form
            action=""
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 login-background"
            onSubmit={handleSubmit}
            >
            <p className="text-center text-lg font-medium">login in to your account</p>

            <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <div className="relative">
                <input
                    type="email"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter email"
                    value={adresseUtil} onChange={handleEmailChange}
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                    </svg>
                </span>
                </div>
            </div>

            <div>
                <label htmlFor="password" className="sr-only">Password</label>

                <div className="relative">
                <input
                    type="password"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter password"
                    value={pass} onChange={handlePasswordChange}
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                    </svg>
                </span>
                </div>
            </div>

            <button
                type="submit"
                className="block w-full rounded-lg bg-yellow-400 px-5 py-3 text-sm font-medium text-black"
            >
                Login
            </button>

            </form>
        </div>
        </div>
    );
}

export default LoginPage;