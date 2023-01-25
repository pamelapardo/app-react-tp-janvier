import ExpensesDate from './expensesDate';

function CardItem(props){
  
  return(
    <div className='card-item-container'>
      <ExpensesDate date={props.date}/>

      <div className='motive-container'>
        <h3 className='motive'>{props.motive}</h3>
      </div>

      <div className='amount-container'>
        <p className='amount'>{props.amount}$</p>
      </div>
    </div>
  )
}

export default CardItem;