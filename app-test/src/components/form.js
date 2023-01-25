function Form(){
  return(
    <div className="form-container">
      <form>
        <div>
          <label for="date">Date:</label>
          <input type="date" id="date" name="date"/>
        </div>
        <div>
          <label for="motive">Motive</label>
          <input type="text" id="motive" name="motive"/>
        </div>
        <div>
          <label for="price">Montant</label>
          <input type="number" id="price" name="price" min="0" step="any" placeholder="25,50$"/>
        </div>
      </form>
    </div>
  )
}

export default Form