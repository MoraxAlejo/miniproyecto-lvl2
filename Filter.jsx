
const Filter = ({handleChange}) => {
    return (
      <div>
          <h4>Busqueda Por Nombre</h4>
          <input
            onChange={handleChange}
            type="text"
            id="filter"
            placeholder="filter by name"
          />
        </div>
    )
  }
  
  export default Filter