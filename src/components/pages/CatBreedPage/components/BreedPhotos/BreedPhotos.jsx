import './BreedPhotos.css'
import cat from '.././../../../../assets/image2.png'

const BreedPhotos = () => {
    return (
        <div className="bimg">
            <h2 className="bimg_title">Other photos</h2>
            <div className="bimg__img-container"> 
                {Array(8).fill().map((el, i) => <img src={cat} className="" width="100%" />)}
            </div>
        </div>
    )
}

export default BreedPhotos
