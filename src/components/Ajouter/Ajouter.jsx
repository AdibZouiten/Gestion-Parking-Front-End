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

//nav ajoute

// export default Ajouter




import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import React from 'react';
import './Ajouter.css';

function Ajouter() {
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
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 background-add">
        <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl text-black font-bold sm:text-3xl">Ajouter un Stationnement</h1>

        </div>

        <form className="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="email" className="sr-only">Email</label>

            <div className="relative">
                <input
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                type="date" format="yyyy-MM-dd" id="dateStat" name="dateStat" value={dateStat} onChange={(e) => setdateStat(e.target.value)} required 
                />
            </div>
            </div>

            <div>
            <label htmlFor="password" className="sr-only">Nombre d'unite</label>

            <div className="relative">
                <input
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                type='number' id="nbUnit" name="nbUnit" value={nbUnit} onChange={(e) => setnbUnit(e.target.value)} required
                />

            </div>
            </div>

            <div>
            <label htmlFor="password" className="sr-only">Parking</label>

            <div className="relative">
                    <select  className='w-full rounded-lg bg-white border-gray-200 p-4 pe-12 text-sm shadow-sm' id="parkings" name="parking" value={idPark} onChange={(e) => setidPark(e.target.value)}>
                        {parking && parking.map((elem) => (
                            <>
                                <option value={elem.idPark}>{elem.nomPark}</option>
                            </>
                        ))}
                    </select>
            </div>
            </div>


            <div>
            <label htmlFor="password" className="sr-only">type de paiment</label>

            <div className="relative">
                    
                    <select className='w-full rounded-lg bg-white border-gray-200 p-4 pe-12 text-sm shadow-sm' id="type" name="type" value={idType} onChange={(e) => setidType(e.target.value)}>
                        {type && type.map((elem) => (
                            <>
                                <option value={elem.idT}>{elem.nomType}</option>
                            </>
                        ))}
                    </select>
            </div>
            </div>

            <div className="flex items-center justify-center">
            <button
                type="submit"
                className="inline-block rounded-lg bg-yellow-400 px-5 py-3 text-sm font-medium text-black"
            >
                submit
            </button>
            </div>
        </form>
        </div>
    );
}

export default Ajouter;