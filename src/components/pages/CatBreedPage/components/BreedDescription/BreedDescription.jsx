import './BreedDescription.css'
import cat from '../../../../../assets/image2.png'
import Raiting from '../Raiting/Raiting.jsx'

const BreedDescription = () => {
    return (
        <div className="bdes__container">
            <div className="bdes__img-container">
                <img src={cat} alt="" />
            </div>
            <div className="bdes__description">
                <h1 className="bdes__title" >Abyssinian</h1>
                <p>The Abyssinian is easy to care for, and a joy to have in your home.
                    They’re affectionate cats and love both people and other animals.
                </p>
                <p className="bdes__details"><strong>Temperament: </strong>Alert, Agile, Energetic, Demanding, Inteligent</p>
                <p className="bdes__details"><strong>Origin: </strong>United States</p>
                <p className="bdes__details"><strong>Life Span: </strong>12 - 15 years</p>
                <div className="bdes__details-raiting">
                    <strong>Adaptability: </strong>
                    <Raiting point={5} />
                </div>
                <div className="bdes__details-raiting">
                    <strong>Affection Level: </strong>
                    <Raiting point={5} />
                </div>
                <div className="bdes__details-raiting">
                    <strong>Child Frienly: </strong>
                    <Raiting point={4} />
                </div>
                <div className="bdes__details-raiting">
                    <strong>Grooming: </strong>
                    <Raiting point={1} />
                </div>
                <div className="bdes__details-raiting">
                    <strong>Inteligence: </strong>
                    <Raiting point={5} />
                </div>
                <div className="bdes__details-raiting">
                    <strong>Health Issues: </strong>
                    <Raiting point={3} />
                </div>
                <div className="bdes__details-raiting">
                    <strong>Social needs: </strong>
                    <Raiting point={5} />
                </div>
                <div className="bdes__details-raiting">
                    <strong>Stranger friendly: </strong>
                    <Raiting point={3} />
                </div>
            </div>
        </div>
    )
}

export default BreedDescription
