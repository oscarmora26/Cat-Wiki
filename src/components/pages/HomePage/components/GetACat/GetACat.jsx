import './GetACat.css'
import image1 from '../../../../../assets/image1.png';
import image2 from '../../../../../assets/image2.png';
import image3 from '../../../../../assets/image3.png';

const GetACat = () => {
    return (
        <section className="gac__grid">
            <div className="gac__text">
                <hr />
                <h2 className="gac__title">Why should you have a cat</h2>
                <p className="gac__description">
                    Having a cat around you can actually trigger the release of calming chemicals
                    in your body which lower your stress and anxiety levels.
                </p>
                <p className="gac__rm">{`REED MORE -->`}</p>
            </div>
            <div className="gac__img-grid">
                <div>
                    <img src={image2} alt="" />
                    <img src={image1} alt="" />
                </div>
                <div>
                    <img src={image3} alt="" />
                </div>
            </div>
        </section>
    )
}

export default GetACat
