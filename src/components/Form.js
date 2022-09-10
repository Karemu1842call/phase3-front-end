import React from 'react'
import { useState } from 'react'
function Form (){
// this will contain the form that the customer will input his/her details so as a preview of information is shown on top of the cart.
const [customer_name, setcustomer_name]=useState('')
const [customer_address, setcustomer_address] =useState('')
const [customer_phone_no, setcustomer_phone_no]= useState('')

function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:9292/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        customer_name: customer_name,
        customer_address: customer_address,
        customer_phone_no: customer_phone_no,
        
      })
    })
    .then(res=> res.json())
    .then(data => {
      console.log(data)
      setcustomer_name('')
      setcustomer_address('')
      setcustomer_phone_no('')
    })
    .catch(err => err.message)

    document.querySelector('form').reset()
  }
return(
    <div className='form'>
        <form onSubmit={handleSubmit}>>
            <input type='text' className='jibu' placeholder='Name' value={customer_name}></input>
            <input type='text' className='jibu' placeholder='Address' value={customer_address}></input>
            <input type='string' className='jibu' placeholder='Phone no' value={customer_phone_no}></input>

            <select>
                <option value='Female'>Female</option>
                <option value='Male'>Male</option>
            </select>
        </form>
    </div>
)
}
export default Form