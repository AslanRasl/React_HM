import { useEffect } from "react"
import CardComponent from "../Cart"
import "./products.style.scss"
import axios from "axios"
import { useState } from "react"

const Products = () => {

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
            <div className="products__text">
                <h1 className="products__title">Our products</h1>

                <ul className="product__ul">
                    <li className="product__item">Sale</li>
                    <li className="product__item">HOT</li>
                    <li className="product__item">New Arrivals</li>
                    <li className="product__item">Accessories</li>
                </ul>
            </div>
            
            {data.map((item) =>
                <CardComponent title={item.title} price={item.price} rate={item.rating.rate} image={item.image} />
            )}
        </div>
    )
}
export default Products