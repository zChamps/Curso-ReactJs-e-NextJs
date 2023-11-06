
import './App.css';
import ShowNameProps from "./Components/ShowNameProps"
import CarPropsDes from './Components/CarPropsDes';

function App() {
  const cars = [
    {id: 1, marca: "Chevrolet", ano:2023, km:340},
    {id: 2, marca: "Kia", ano:2003, km:3240},
    {id: 3, marca: "Fiat", ano:2013, km:3400},
    {id: 4, marca: "BMW", ano:2024, km:0},
    {id: 5, marca: "Nissan", ano:1997, km:30040}
  ]



  return (
    <div className="App">
      <>
        {/* Usando props */}
        <ShowNameProps name="Willian" age="18"/>

        {/* Usando desestruturação */}
        <CarPropsDes marca="Ferrari" ano="2022" km={300}/>

        {/* Usando desestruturação dinamica com array de objetos */}
        {cars.map(car => {
          return <CarPropsDes key={car.id} marca={car.marca}  ano={car.ano} km={car.km}/>
          
        })}
      </>

    </div>
  );
}

export default App;
