import { useEffect, useState } from 'react';
import './SearchBox.css';
import { getIdAllBreed } from '../../../services/BreddServices.js';
import { Link } from 'react-router-dom';

const SearchBox = ({ data }) => {

    const [boxVisible, setBoxVisible] = useState(false)
    const [breed, setBreed] = useState([]);

    useEffect(() => {
        const getData = async () => {
            setBreed( await getIdAllBreed());
        }
        getData();
    }, [])

    return (
        <div className="sbox__container">
            <div className="sbox__search-box">
                <input type="text" name="" id="" placeholder="Enter your breed" className="sbox__form-control"
                    onClick={() => setBoxVisible(true)} />
                <span className="material-icons sbox__icon">
                    search
                </span>
            </div>

            {boxVisible &&
                <div className="sbox__search-select">
                    {breed.map(({ id, name }, i) => {
                        return (
                            <Link to={`/breed/${id}`} key={i} >
                                <p  className="sbox__search-select-items">{name}</p>
                            </Link>
                        )
                    })
                    }

                </div>
            }

        </div>
    )
}

export default SearchBox
