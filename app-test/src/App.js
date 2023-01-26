import Card from './components/card'
import Form from './components/form';
import './styles.css'

function App() {
  const expenses = [
    {
    id:'1',
    date: new Date(2022, 11, 27),
    motive:'Carrefour',
    amount: 59.20,
    },
    {
    id:'2',
    date: new Date(2022, 0, 5),
    motive:'Lidl',
    amount: 25.85,
    },
    {
    id:'3',
    date: new Date(2023, 1, 2),
    motive:'Tabac Le Lyonnais',
    amount: 12.50,
    }
  ]
  return (
    <div className='card-page'>
      <Form/>
      <div className='width-100'>
        <Card items={expenses} />
      </div>
    </div>
  );
}

export default App;
