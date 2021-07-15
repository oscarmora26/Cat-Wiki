import Logo from '../../common/Logo/Logo.jsx';
import Footer from '../../common/Footer/Footer.jsx';
import Hero from './components/Hero/Hero.jsx';
import GetACat from './components/GetACat/GetACat.jsx'
import MostSearchedBreed from './components/MostSearchedBreed/MostSearchedBreeds.jsx'

const HomePage = () => {
    return (
        <div>
            <Logo />
            <Hero />
            <MostSearchedBreed />
            <GetACat />
            <Footer />
        </div>
    )
}

export default HomePage

