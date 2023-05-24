import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import React from 'react';
import './Ajouter.css';
import Alert from 'react-popup-alert'

function Ajouter() {
    const [parking, setparking] = useState()
    const [type, settype] = useState()
    const [message, setMessage] = useState()
    const [dateStat, setdateStat] = useState('');
    const idUtilisateur = 1;
    const [idPark, setidPark] = useState(1);
    const [idType, setidType] = useState(1);
    const [nbUnit, setnbUnit] = useState('');


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
            setMessage(response.data.message)

        } catch (error) {
            console.error(error);
        }

    };
    const [alert, setAlert] = React.useState({
        type: 'error',
        text: 'This is a alert message',
        show: false
    })

    function onCloseAlert() {
        setAlert({
            type: '',
            text: '',
            show: false
        })
    }

    function onShowAlert(type) {
        setAlert({
            type: type,
            text: 'Demo alert',
            show: true
        })
    }
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
                        <select className='w-full rounded-lg bg-white border-gray-200 p-4 pe-12 text-sm shadow-sm' id="parkings" name="parking" value={idPark} onChange={(e) => setidPark(e.target.value)}>
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
                    style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}
                        onClick={() => onShowAlert('success')}
                        type="submit"
                        className="inline-block rounded-lg bg-yellow-400 px-5 py-3 text-sm font-medium text-black"
                    >
                        submit
                    </button>
                </div>
            </form>
        
            <Alert
                header={'Header'}
                btnText={'Close'}
                text={alert.text}
                type={alert.type}
                show={alert.show}
                onClosePress={onCloseAlert}
                pressCloseOnOutsideClick={true}
                showBorderBottom={true}
                alertStyles={{}}
                headerStyles={{}}
                textStyles={{}}
                buttonStyles={{}}
            />
        </div>
    );
}

export default Ajouter;