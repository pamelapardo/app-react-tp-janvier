import ExpensesDate from './expensesDate';

function CardItem(props){
  
  return(
    <div className='card-item-container'>
      <ExpensesDate date={props.items.date}/>

      <div className='motive-container'>
        <h3 className='motive'>{props.items.motive}</h3>
      </div>

      <div className='amount-container'>
        <p className='amount'>${props.items.amount}</p>
      </div>
    </div>
  )
}

export default CardItem;