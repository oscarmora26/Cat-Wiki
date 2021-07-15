import './MostSearchedBreed.css'
import cat from '../../../../../assets/image2.png'

const MostSearchedBreeds = () => {
    return (
        <section className="msb"> 
            <p className="msb__title">Most Search Breeds</p>
            <hr />
            <h2>66+ Breed For Your to discover</h2>
            <p>See more</p>
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
