import React from "react"
function Hub(props) {
// to contain images of the cars in the cars table and on submit the list goes to the cart.
   const {cars, onAdd } = props;
   return (
   <main className="magari">
      <h1>Car-Hub</h1>
      <h2>cars</h2>
      <div className="ndae">
         {cars.map((car)=>(
            <car key={car.id} onAdd={onAdd}></car>
         ))}
      </div>
   </main>
         )
      }
export default Hub