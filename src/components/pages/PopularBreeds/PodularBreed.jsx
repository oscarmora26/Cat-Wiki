import './PopularBreed.css'

import Logo from '../../common/Logo/Logo.jsx';
import Footer from '../../common/Footer/Footer.jsx';
import { Link } from 'react-router-dom';

const PodularBreed = () => {
    return (
        <>
            <Logo />
            <h1>Top 10 most searched breeds</h1>
            {Array(10).fill().map((el, i) => {
                return (
                    < div key={i}>
                        <div className="pb__row">
                            <div className="pb__img">
                                <div className="pb__img-container">
                                    <Link to="/">
                                        <img src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg" alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="pb__description">
                                <h2>{i + 1}. Siamese</h2>
                                <p>While Siamese cats are extremely fond of their people, they will follow you
                                    around and supervise your every move, being talkative and opinionated.
                                    They are a demanding and social cat, that do not like being left alone for long periods.
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })
            }
            <Footer />
        </>
    )
}

export default PodularBreed
