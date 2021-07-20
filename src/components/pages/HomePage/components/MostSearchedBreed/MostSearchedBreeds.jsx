import './MostSearchedBreed.css'
import cat from '../../../../../assets/image2.png'
import { Link } from 'react-router-dom';


const MostSearchedBreeds = () => {
    return (
        <section className="msb">
            <p className="msb__title">Most Search Breeds</p>
            <hr />
            <h2>66+ Breed For Your to discover</h2>
            <Link color="" to="/popular-breed">
                <p color="white">See more</p>
            </Link>
            <div className="msb__breed-photos-grid">
                <div className="msb-photos-item">
                    <img src={cat} alt="" />
                    <p>Bengal</p>
                </div>
                <div className="msb-photos-item">
                    <img src={cat} alt="" />
                    <p>Bengal</p>
                </div>
                <div className="msb-photos-item">
                    <img src={cat} alt="" />
                    <p>Bengal</p>
                </div>
                <div className="msb-photos-item">
                    <img src={cat} alt="" />
                    <p>Bengal</p>
                </div>
            </div>
        </section>
    )
}

export default MostSearchedBreeds
