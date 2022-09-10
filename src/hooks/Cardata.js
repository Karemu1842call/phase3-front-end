import { useEffect, useState } from "react"

function cardata(){
    const [car, setcar] = useState('')
    const url = "http://localhost:9292/cars"
    useEffect(()=>{
      fetch(url)
      .then(res => res.json())
      .then(data => {
        setcar(data)
        // console.log(data)
      })
      .catch(err => console.log(err))
    }, [])
    return [car, setcar, url]
}

export default cardata