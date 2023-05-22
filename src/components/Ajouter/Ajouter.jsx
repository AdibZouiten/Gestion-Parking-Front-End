// import React ,{useRef} from 'react'
// import axios from 'axios';

// import './Ajouter.css'

// function Ajouter() {

//     const idURef = useRef(null);
//     const idParkRef = useRef(null);
//     const nomTypeRef = useRef(null);


//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const idU = idURef.current.value;
//         const idPark = idParkRef.current.value;
//         const nomType = nomTypeRef.current.value;


//         if(!idU || isNaN(idU)) {

//             console.error('ID utilisateur est invalid');
//             return;
//         }

//         if(!idPark || isNaN(idPark)) {

//             console.error('ID parking est invalid');
//             return;
//         }
//         if(!nomType) {

//             console.error('Type Tarif est invalid');
//             return;
//         }


//         const form_data = {
//             idUtilisateur: idU,
//             idPark: idPark,
//             idType: nomType
//         };

//         axios.post('http://127.0.0.1:8000/api/AjouterStationnement', {
//             form_data
//           })
//           .then(response => {
//             console.log(response.data);
//             // Do something with the response data
//           })
//           .catch(error => {
//             console.error(error);
//             // Do something with the error
//           });

//         console.log(form_data);


//     };



//     return (
//         <div className='cont add'>
//             <form onSubmit={handleSubmit}  className='add-form'>
//                 <div className='add-form-row'>
//                     <h1>Add station</h1>
//                 </div>
//                 <div className='add-form-row'>
//                     <label>l'identifiant de l'utilisateur</label>
//                     <input type="text" name='idU' ref={idURef} />
//                 </div>
//                 <div className='add-form-row'>
//                     <label>l'identifiant de parking</label>
//                     <input type="text" name='idPark' ref={idParkRef} />
//                 </div>
//                 <div className='add-form-row'>
//                     <label>Type Tarif</label>
//                     <select name="nomType" ref={nomTypeRef} >
//                         <option value="card">card</option>
//                         <option value="card ">card</option>
//                         <option value="card">card</option>
//                         <option value="card">card</option>
//                     </select>
//                 </div>

//                 <div className='add-form-row'>
//                     <button className='btn btn-submit-add' type='submit' >Submit</button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default Ajouter
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import React from 'react';
import './Ajouter.css';

function Testtest() {
    //get all categories

    //get all subcategories
    const [parking, setparking] = useState()
    const [type, settype] = useState()
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/allparkings')
            .then(response => {
                setparking(response.data)
            }).catch(error => {
                console.log(error);
            })
    }, [])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/alltypes')
            .then(response => {
                settype(response.data)
            }).catch(error => {
                console.log(error);
            })
    }, [])
    const [dateStat, setdateStat] = useState('');
    const idUtilisateur = 1;
    const [idPark, setidPark] = useState(1);
    const [idType, setidType] = useState(1);
    const [nbUnit, setnbUnit] = useState('');

    // the code of submit's form
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/AjouterStationnement", {
                dateStat,
                idUtilisateur,
                idPark,
                idType,
                nbUnit,
            }
            );
            console.log(response.data)
        } catch (error) {
            console.error(error);
        }

    };
    return (
        <div className='cont add'>

            <form onSubmit={handleSubmit} className='add-form' >
                <div className='add-form-row'>
                    <label htmlFor="dateStat">dateStat:</label>
                    <input type="date" format="yyyy-MM-dd" id="dateStat" name="dateStat" value={dateStat} onChange={(e) => setdateStat(e.target.value)} required />

                </div>
                <div className='add-form-row'>

                    <label htmlFor="nbUnit">Nombre d'unite:</label>
                    <input type='number' id="nbUnit" name="nbUnit" value={nbUnit} onChange={(e) => setnbUnit(e.target.value)} required></input>
                </div>

                <div className='add-form-row'>

                    <label htmlFor="Parking">Parking:</label>

                    <select id="parkings" name="parking" value={idPark} onChange={(e) => setidPark(e.target.value)}>
                        {parking && parking.map((elem) => (
                            <>
                                <option value={elem.idPark}>{elem.nomPark}</option>
                            </>
                        ))}
                    </select>
                </div>
                <div className='add-form-row'>

                    <label htmlFor="type">type de paiment:</label>

                    <select id="type" name="type" value={idType} onChange={(e) => setidType(e.target.value)}>
                        {type && type.map((elem) => (
                            <>
                                <option value={elem.idT}>{elem.nomType}</option>
                            </>
                        ))}
                    </select>
                </div>
                <div className='add-form-row'>

                    <button  className='btn btn-submit-add' type="submit">Ajouter Stationnement</button>

                </div>
            </form>
        </div>
    );
}

export default Testtest;