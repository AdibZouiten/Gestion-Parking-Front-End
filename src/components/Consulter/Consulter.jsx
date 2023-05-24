import React, { useState } from 'react';
import axios from 'axios';
import './Consulter.css';
import Table from 'react-bootstrap/Table';

const Consulter = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);
    const [expenses, setExpenses] = useState([]);
    const idutil = 1

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // API call to retrieve expenses between the two dates using Axios
        axios.get(`http://127.0.0.1:8000/api/stationnement`, {
            params: {
                start_date: startDate,
                end_date: endDate,
                idUtil: idutil,
            }
        }).then((response) => {
                setExpenses(response.data);
                console.log(response.data);
                const total = response.data.reduce((acc, expense) => acc + (expense.prix * expense.nbUnit), 0);
                setTotalAmount(total);

            })
            .catch((error) => {
                console.error(error);
            });

    };

    return (
        <div>
            <div className='Consulter bg-white'>
                <form onSubmit={handleSubmit} className='Consulter-form' >
                    <h1>Consulter</h1>
                    <div className='Consulter-form-row'>
                        <label>Premier Date :</label>
                        <input
                            type='date'
                            format='yyyy-MM-dd'
                            id='start-date'
                            value={startDate}
                            onChange={handleStartDateChange}
                            className='bg-white'
                        />
                    </div>
                    <div className='Consulter-form-row'>
                        <label>Deuxième Date :</label>
                        <input
                            type='date'
                            format='yyyy-MM-dd'
                            id='end-date'
                            value={endDate}
                            onChange={handleEndDateChange}
                            className='bg-white'
                        />
                    </div>
                    <div className='Login-form-row'>
                        <button type='submit' className='button-submit-con bg-black-400' >
                            Rechercher
                        </button>
                    </div>
                </form>

                <Table className='cont-table' bordered hover variant="white">
                    <thead>
                        <tr>
                            <th>Nom du parking</th>
                            <th>Ville</th>
                            <th>Prix</th>
                            <th>Nombre d'unités</th>
                            <th>Montant</th>
                        </tr>
                    </thead>

                    <tbody>
                        {expenses.map((expense) => (
                            <tr key={expense.id}>
                                <td>{expense.nomPark}</td>
                                <td>{expense.ville}</td>
                                <td>{expense.prix}</td>
                                <td>{expense.nbUnit}</td>
                                <td>{expense.montant}</td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={4}>Total des montants :</td>
                            <td>{totalAmount}</td>
                        </tr>

                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export default Consulter;



