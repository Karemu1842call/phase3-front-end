import { useEffect, useState } from "react"

function customerdata(){
    const [customer, setcustomer] = useState('')
    const url = "http://localhost:9292/customer"
    useEffect(()=>{
      fetch(url)
      .then(res => res.json())
      .then(data => {
        setcustomer(data)
        // console.log(data)
      })
      .catch(err => console.log(err))
    }, [])
    return [customer, setcustomer, url]
}

export default customerdata