import './Hero.css'
import logo from '../../../../../assets/CatwikiLogoWhite.svg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero__hero">
            <img src={logo} alt="img logo" className="hero__img" />
            <p className="hero__title">Get to know more about your cat breed</p>
            <form action="">
                <Link to="/breed/x">
                    <div className="hero_search-box">
                        <input type="text" name="" id="" placeholder="Enter your breed" className="hero__form-control" />
                        <span class="material-icons hero__icon">
                            search
                        </span>
                    </div>
                </Link>
            </form>
        </div>
    )
}

export default Hero
