import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Consulter.css';
import Table from 'react-bootstrap/Table';


function Consulter() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [expensesData, setExpensesData] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);


    const handleSearch = () => {
        axios
            .get(`http://127.0.0.1:8000/api/stationnement`, {
                params: {
                    startDate: startDate, 
                    endDate: endDate 
                }
            })
            .then(response => {
                setExpensesData(response.data);
                console.log(response.data);
                const total = response.data.reduce((acc, expense) => acc + (expense.prix * expense.nbUnit), 0);
                setTotalAmount(total);
            })
            .catch(error => {
                console.error(error);
            });
    };

    useEffect(() => {
        handleSearch();
    }, [startDate, endDate]);

    return (
        <div>
            <div className='Consulter bg-white'>
                <form className='Consulter-form'>
                    <h1>Consulter</h1>
                    <div className='Consulter-form-row'>
                        <label>Premier Date :</label>
                        <input
                            type='date'
                            format='yyyy-MM-dd'
                            id='start-date'
                            value={startDate}
                            onChange={e => setStartDate(e.target.value)}
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
                            onChange={e => setEndDate(e.target.value)}
                            className='bg-white'
                        />
                    </div>
                    <div className='Login-form-row'>
                        <button className='button-submit-con bg-black-400' onClick={handleSearch}>
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
                        {expensesData.map(expense => (
                            <tr key={expense.idPark}>
                                <td>{expense.nomPark}</td>
                                <td>{expense.ville}</td>
                                <td>{expense.prix}</td>
                                <td>{expense.nbUnit}</td>
                                <td>{expense.prix * expense.nbUnit}</td>
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
}

export default Consulter;
