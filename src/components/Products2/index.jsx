import { useEffect } from "react"
import CardComponent2 from "../Cart2"
import "./products2.style.scss"
import axios from "axios"
import { useState } from "react"

const Products2 = () => {

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
        
        <div className="products-container">

        <div className="prod__text">
            <h1 className="prod__title">Best selling</h1>
            <p className="prod__subtitle">Get in on the trend with our curated selection of best-selling styles.</p>
        </div>

            {data.map((item) =>
                <CardComponent2 title={item.title} price={item.price} rate={item.rating.rate} image={item.image} />
            ).splice(0,3)}

            <button className="btnnn">See all  →</button>
        </div>
    )
}
export default Products2