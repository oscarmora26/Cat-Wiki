import './BreedDescription.css'
import cat from '../../../../../assets/image2.png'
import Raiting from '../Raiting/Raiting.jsx'

const BreedDescription = ({breed}) => {
    // console.log(breeds)
    return (
        <div className="bdes__container">
            <div className="bdes__img-container">
                <img src={breed.url} alt="" />
            </div>
            <div className="bdes__description">
                <h1 className="bdes__title" >{breed.name}</h1>
                <p>{breed.description}</p>
                <p className="bdes__details"><strong>Temperament: </strong>{breed.temperament}</p>
                <p className="bdes__details"><strong>Origin: </strong>{breed.origin}</p>
                <p className="bdes__details"><strong>Life Span: </strong>{breed.life_span} years</p>
                <div className="bdes__details-raiting">
                    <strong>Adaptability: </strong>
                    <Raiting point={breed.adaptability} />
                </div>
                <div className="bdes__details-raiting">
                    <strong>Affection Level: </strong>
                    <Raiting point={breed.affection_level} />
                </div>
                <div className="bdes__details-raiting">
                    <strong>Child Frienly: </strong>
                    <Raiting point={breed.child_friendly} />
                </div>
                <div className="bdes__details-raiting">
                    <strong>Grooming: </strong>
                    <Raiting point={breed.grooming} />
                </div>
                <div className="bdes__details-raiting">
                    <strong>Inteligence: </strong>
                    <Raiting point={breed.intelligence} />
                </div>
                <div className="bdes__details-raiting">
                    <strong>Health Issues: </strong>
                    <Raiting point={breed.health_issues} />
                </div>
                <div className="bdes__details-raiting">
                    <strong>Social needs: </strong>
                    <Raiting point={breed.social_needs} />
                </div>
                <div className="bdes__details-raiting">
                    <strong>Stranger friendly: </strong>
                    <Raiting point={breed.stranger_friendly} />
                </div>
            </div>
        </div>
    )
}

export default BreedDescription
