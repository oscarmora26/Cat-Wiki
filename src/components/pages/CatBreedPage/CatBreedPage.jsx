import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Footer from "../../common/Footer/Footer"
import Logo from "../../common/Logo/Logo"
import BreedDescription from './components/BreedDescription/BreedDescription.jsx'
import BreedPhotos from './components/BreedPhotos/BreedPhotos.jsx'
import { getOneBreed, getPhotosBreed } from '../../../services/BreddServices';

const CatBreedPage = () => {

    const { id } = useParams();
    const [breed, setBreed] = useState([]);
    const [breedPhotos, setBreedPhotos] = useState([])
    useEffect(() => {
        const getData = async () => {
            setBreed(await getOneBreed(id));
            setBreedPhotos(await getPhotosBreed(id));
        }
        getData();
    }, [])

    return (
        <div>
            <Logo />
            <BreedDescription breed={breed} />
            <BreedPhotos breedPhotos={breedPhotos}/>
            <Footer />
        </div>
    )
}

export default CatBreedPage
