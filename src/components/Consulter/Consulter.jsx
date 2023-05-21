import React from 'react'
import './Consulter.css'

function Consulter() {
    return (
        <div>
            <div className='cont Consulter'>
                <form className='Consulter-form'>
                    <h1>Consulter</h1>
                    {/* date1 */}
                    <div className='Consulter-form-row'>
                        <label>Premier Date :</label>
                        <input type="date" /*value={PreDate} onChange={handlePreDateChange} */ />

                    </div>
                    {/* date 2 */}
                    <div className='Consulter-form-row'>
                        <label>Deuxième Date : </label>
                        <input type="date" /*value={DeuDate} onChange={handleDeuDateChange}*/ />

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Consulter