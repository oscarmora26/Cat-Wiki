import logo from '../../../assets/CatwikiLogo.svg'
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/">
            <img src={logo} alt="" />
        </Link>
    )
}

export default Logo
