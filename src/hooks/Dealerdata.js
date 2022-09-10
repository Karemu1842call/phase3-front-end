import { useEffect, useState } from "react"

function dealerdata(){
    const [dealer, setdealer] = useState('')
    const url = "http://localhost:9292/dealer"
    useEffect(()=>{
      fetch(url)
      .then(res => res.json())
      .then(data => {
        setdealer(data)
        // console.log(data)
      })
      .catch(err => console.log(err))
    }, [])
    return [dealer, setdealer, url]
}

export default dealerdata