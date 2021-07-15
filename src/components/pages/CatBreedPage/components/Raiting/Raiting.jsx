import './Raiting.css';

const Raiting = ({point}) => {

    let raiting = Array(5).fill().map((el, i) => {
        if (parseInt(i) < point) {
            return <div className="rtg__level rtg__fill" key={i}></div>
        }else{
            return <div className="rtg__level rtg__empty" key={i}></div>
        }
    })

    return (
        <div className="rtg__container">
            {raiting}
        </div>
    )
}

export default Raiting
