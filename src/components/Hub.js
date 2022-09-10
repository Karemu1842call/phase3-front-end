import React from "react"
function Hub() {
// to contain images of the cars in the cars table and on submit the list goes to the cart.
   const { products, onAdd } = props;
   return (
   <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
      {products.map((product) => (
         <Product key={product.id} product={product} onAdd={onAdd}></Product>
         )
      </div>
         </main>
         )
      }
export default Hub