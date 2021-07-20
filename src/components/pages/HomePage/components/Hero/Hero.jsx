import './Hero.css'
import SearchBox from '../../../../common/SearchBox/SearchBox';
import logo from '../../../../../assets/CatwikiLogoWhite.svg';

const Hero = () => {

    return (
        <div className="hero__hero">
            <img src={logo} alt="img logo" className="hero__img" />
            <p className="hero__title">Get to know more about your cat breed</p>
            <form action="">
                    <SearchBox />
            </form>
        </div>
    )
}

export default Hero
