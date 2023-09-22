
import { useEffect, useState } from "react";
import Icons from "./Icons";


 const Cards = ({city, guests}) => {
  fetch('stays.json')
  .then(response => response.json())
  .then(data => console.log(data));
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Función para filtrar los datos en función de la ciudad y el número de invitados
  const filterData = (data) => {
    return data.filter((item) => {
      // Comprobar si se ha ingresado una ciudad
      const cityMatch = city ? item.city.toLowerCase() === city.toLowerCase() : true;
      // Comprobar si el número de invitados es suficiente
      const guestsMatch = item.maxGuests >= guests;
      // Devolver verdadero si ambos criterios coinciden
      return cityMatch && guestsMatch;
    });
  };
  
  

 
  const filteredData = filterData(data);

  return (
    <>
      {filteredData.map((el, i) => {
        return (
          <div className="cards" key={i}>
            <div className="contenedor-imagen">
              <img src={el.photo} className="photo" alt="" />
            </div>
            <div className="rating">
              <div>
                <p className="type">
                  {el.superHost && <div className="superhost">SuperHost</div>}
                  {el.type}
                  {el.beds && <p className="beds"> . {el.beds} beds </p>}
                </p>
              </div>
              <div className="points">
                <Icons /> <div className="numbers"> {el.rating} </div>
              </div>
            </div>
            <h4 className="description"> {el.title}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Cards;

