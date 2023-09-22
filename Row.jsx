
const Row = ({ alumno }) => {
    return (
      <tr>
        <th scope="row">{alumno.id}</th>
        <td>{alumno.name}</td>
        <td>{alumno.lastName}</td>
        <td>{alumno.grade}</td>
        <td>{alumno.age}</td>
        <td>
          <button className="delete"> X </button>
        </td>
      </tr>
    )
  }
  
  export default Row