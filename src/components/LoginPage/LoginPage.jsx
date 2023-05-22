
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
        <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

            <MDBRow>

                <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

                    <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
                        Bienvenue à notre  <br />
                        <span style={{ color: 'hsl(218, 81%, 75%)' }}>logiciel de gestion du stationnement</span>
                    </h1>

                    <p className='px-3' style={{ color: 'white' }}>
                        Gérer un stationnement peut être un défi, mais avec notre puissant
                        logiciel, c’est un jeu d’enfant. Notre plateforme est conçue pour
                        la gestion des parkings, pour vous faciliter la tâche
                        pour gérer votre entreprise efficacement.
                    </p>

                </MDBCol>

                <MDBCol md='6' className='position-relative'>

                    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                    <MDBCard className='my-5 bg-glass' onSubmit={handleSubmit}>
                        <MDBCardBody className='p-5'>
                            <form className='Login-form' onSubmit={handleSubmit}>
                                <div className='Login-form-row'>
                                    <label>Email:</label>
                                    <input type="email" value={adresseUtil} onChange={handleEmailChange} />
                                </div>
                                <div className='Login-form-row'>
                                    <label>Mot de passe:</label>
                                    <input type="password" value={pass} onChange={handlePasswordChange} />
                                </div>
                                {<div className='Login-form-row' style={{ color: 'red' }}>{error}</div>}
                                <div className='Login-form-row'>
                                    <button className='button-login' type="submit">Se connecter</button>
                                </div>
                            </form>

                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>

            </MDBRow>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </MDBContainer>
    );
}

export default LoginPage;