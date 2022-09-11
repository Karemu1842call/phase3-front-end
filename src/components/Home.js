import React from "react"
function Home(){
    return(
        <div className="about">
            <header>Venom car yard</header>
            <h1>About us</h1>
            <p>We are a car yard located in Ngong road,Kenya.We deal with various types of cars eg :
                <ul>
                    <li>AUDI</li>
                    <li>Lamborghini</li>
                    <li>Toyota</li>
                    <li>BMW</li>
                    <li>DODGE</li>
                    <li>FORD</li>
                </ul>
                <p>We have been for 23 years now, serving Kenyans gracefully.</p>
            </p>
            <div className="bio">
                <div className="kichwandogo">
                    <header>To use this site follow the following instructions</header>
                    </div>
                    <p>
                        <ul>
                            <li>1.read tis instructions to know how to navigate</li>
                            <li>2.Fill in the custumer form so as to shop in our site</li>
                            <li>3.Proceed to our hub and select car or cars of choice and add them to our cart</li>
                            <li>4.Proceed to our cart and confirm the items that you are shopping for and submit the cart for delivery.</li>
                        </ul>
                        </p>
            </div>
        </div>    
        )
    }
    export default Home