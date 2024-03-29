import './style.scss'
import girl from './img/girl.png'
import dot from './img//dot.png'
import back from './img/back.png'

const Timer = () => {

    return (
        <div className='timer'>
            <div className='timer_cont'>
                <h1 className='tim__title'>Exclusive offer</h1>
                <p className='tim__subtitle'>Unlock the ultimate style upgrade with our exclusive offer Enjoy savings of up to 40% off on our latest New Arrivals</p>
                <div className='time'>
                    <div className='time__item'>
                        <p className='day__hours__min'>06</p>
                        <p className='timer__timer'>Days</p>
                    </div>

                    <div className='time__item'>
                        <p className='day__hours__min'>18</p>
                        <p className='timer__timer'>Hours</p>
                    </div>

                    <div className='time__item'>
                        <p className='day__hours__min'>48</p>
                        <p className='timer__timer'>Min</p>
                    </div>
                </div>
                    <button className='time__btn'>BUY NOW</button>
            </div>
        </div>
    )
}

export default Timer