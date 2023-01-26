import './form.css'

function Form(){
  return(
    <div className="form-container">
      <form className='form'>
        <div className='input-container'>
          <label className='title-label' for="date">Date:</label>
          <input className='input-style ' type="date" id="date" name="date"/>
        </div>
        <div className='input-container'>
          <label className='title-label' for="motive">Motive</label>
          <input className='input-style ' type="text" id="motive" name="motive"/>
        </div>
        <div className='input-container'>
          <label className='title-label' for="price">Montant</label>
          <input className='input-style' type="number" id="price" name="price" min="0" step="any" placeholder="$25,50"/>
        </div>
        <div className='btn-container'>
          <button className='btn'>Ajouter à la liste</button>
        </div>
      </form>
    </div>
  )
}

export default Form