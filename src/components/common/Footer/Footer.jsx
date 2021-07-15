import './Footer.css'
import logo from '../../../assets/CatwikiLogoWhite.svg';

const Footer = () => {
    return (
        <footer>
            <div className="footer__container">
                <img src={logo} alt="" />
                <p>@  created by <strong>Oscar</strong> - 2021</p>
            </div>
        </footer>
    )
}

export default Footer
