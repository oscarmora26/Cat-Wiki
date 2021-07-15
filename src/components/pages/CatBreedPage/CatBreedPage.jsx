import Footer from "../../common/Footer/Footer"
import Logo from "../../common/Logo/Logo"
import BreedDescription from './components/BreedDescription/BreedDescription.jsx'
import BreedPhotos from './components/BreedPhotos/BreedPhotos.jsx'


const CatBreedPage = () => {
    return (
        <div>
            <Logo />
            <BreedDescription />
            <BreedPhotos />
            <Footer />
        </div>
    )
}

export default CatBreedPage
