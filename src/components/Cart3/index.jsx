import './style.cart3.scss'


const CardComponent3 = ({ title,image }) => {
    return (
        <div className="cart-container3">
            <img src={image} alt="image" className='cart-image' />
            <div className='cart-content'>
                <h5 className='title'>{title}</h5>
            </div>
        </div>
    )
}
export default CardComponent3