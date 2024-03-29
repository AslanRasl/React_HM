import { useEffect } from "react"
import CardComponent3 from "../Cart3"
import "./style.products3.scss"
import axios from "axios"
import { useState } from "react"

const Products3 = () => {

    const [data, setData] = useState([])

    const getData = () => {
        axios.get('https://fakestoreapi.com/products')
            .then((data) => setData(data.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        
        <div className="products-container-3">
           <div>
           <h1 className="product__title-3">Designer Clothes For You</h1>
           <p className="product__subtitle-3">Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!</p>
           </div>
            
            {data.map((item) =>
                <CardComponent3 title={item.title} image={item.image}  />
            ).splice(0,3)}
                


                
        </div>
    )
}
export default Products3