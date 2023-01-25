import React from "react";

function ExpensesDate(props){
  console.log(props)
  const day = props.date.toLocaleString('en-US', { day: 'numeric' });
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const year = props.date.getFullYear();

  return(
    <div className='card-date'>
      <p className='day'>{day}</p>
      <div className='month-year-container'>
        <p className='month'>{month}</p>
        <p className='year'>{year}</p>
      </div>
    </div>
  )
}

export default ExpensesDate