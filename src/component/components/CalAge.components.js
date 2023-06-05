import React, { PureComponent } from 'react'

export default class CalAgeComponents extends PureComponent {
  render() {

    const { day, month, year, dayOtp, monthOtp, yearOtp, errorMessages, handleChange,handleSubmit } = this.props;

    return (
      <>
      <h1 className='me'>Welcome Age Calculator</h1>
      <div className='main-body'>
        <div className='card'>
        <div className='container'>
                <form onSubmit={handleSubmit}>
                <div className='base'>
               {console.log(day)}
                    <div className='block'>
                        <label htmlFor="day">DATE</label>
                        <input type="number" name='day' value={day} onChange={handleChange}  placeholder='dd' />
                        <small style={{color:"red"}}>{errorMessages.day}</small>
                    </div>
                    <div className='block'>
                        <label htmlFor="month">MONTH</label>
                        <input type="number" name='month' value={month} onChange={handleChange}  placeholder='mm' />
                        <small style={{color:"red"}}>{errorMessages.month}</small>
                    </div>
                    <div className='block'>
                        <label htmlFor="year">YEAR</label>
                        <input type="number" name='year' value={year} onChange={handleChange} 
                         placeholder='yyyy'/>
                        <small style={{color:"red"}}>{errorMessages.year}</small>
                    </div>
                
              </div>
              <div className='submit-block'>
                       <hr />
                    <button type='submit' className='submit-btn'>
                        <img src="./Images/png-icon.png" alt="img" />
                    </button>
                    <hr className='hr2'/>
                </div>
                </form>

                <div className='age-foot'>
                    <h1><span id="DD">{yearOtp!=="" ? yearOtp:"--"} </span>Years</h1>
                    <h1><span id="MM" >{monthOtp!=="" ? monthOtp:"--"} </span>Months</h1>
                    <h1><span id="YY">{dayOtp!=="" ? dayOtp:"--"} </span>Days</h1>
                </div>

        </div>
        </div>
      </div>
      </>
    )
  }
}
