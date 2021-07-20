import './BreedPhotos.css'
import cat from '.././../../../../assets/image2.png'

const BreedPhotos = ({ breedPhotos }) => {
    return (
        <div className="bimg">
            <h2 className="bimg_title">Other photos</h2>
            <div className="bimg__img-grid">
                {breedPhotos.map((el, i) => {
                    return( 
                        <div className="bimg__img-container">
                            <img key={i} src={el.url} alt="breed cat" width="100%" height="100%" />
                        </div>
                        )
                    })
                }                  
            </div>
        </div>
    )
}

export default BreedPhotos
