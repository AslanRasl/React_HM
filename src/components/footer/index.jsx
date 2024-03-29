import './style.scss'
import Facebook from "./img/Facebook.png"
import Instagram from "./img/Instagram.png"
import Twitter from "./img/Twitter.png"

const Footer = () => {

    return (
        <div className='Footer'>

            <div className='media__1'>
                <h1 className='Logo'>Rivo</h1>
                <p className='social__media'>Social Media</p>
                <img src={Facebook} className='img__social1' />
                <img src={Instagram} className='img__social' />
                <img src={Twitter} className='img__social' />
                <div className='line'></div>
            </div>
            <div className='media__2'>

                <h2 className='title'>SHOP</h2>
                <p className='sub__title'>Products</p>
                <p className='sub__title'>Overview</p>
                <p className='sub__title'>Pricing</p>
                <p className='sub__title'>Releases</p>

            </div>

            <div className='media__3'>

                <h2 className='title'>Company</h2>
                <p className='sub__title'>About us</p>
                <p className='sub__title'>Contact</p>
                <p className='sub__title'>News</p>
                <p className='sub__title'>Support </p>

            </div>
            <div className='media__4'>
                <h2 className='title2'>Stay up to date</h2>
                <div className='inp__btn'>
                    <input className='inp' type='email' placeholder='Enter your email' />
                    <button className='btn'>SUBMIT</button>
                </div>
            </div>
            <div className='footer__end'>
                <h1 className='end__title'>Terms</h1>
                <h1 className='end__title'>Privacy</h1>
                <h1 className='end__title'>Cookies</h1>
            </div>

        </div>
    )
}

export default Footer