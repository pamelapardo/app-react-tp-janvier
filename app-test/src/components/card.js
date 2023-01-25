import CardItem from './cardItem';

function Card(props){
  return(
    <div className='card-container'>
      <CardItem
        date={props.items[0].date}
        motive={props.items[0].motive}
        amount={props.items[0].amount}
      />
      <CardItem
        date={props.items[1].date}
        motive={props.items[1].motive}
        amount={props.items[1].amount}
      />
      <CardItem
        date={props.items[2].date}
        motive={props.items[2].motive}
        amount={props.items[2].amount}
      />
    </div>
  )
}

export default Card;