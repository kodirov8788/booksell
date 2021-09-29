import React from 'react';
import './Price.css';

const Prise = () => {
    return (
        <div className="price">
            <p>Price</p>
            <div className="hr"></div>
            <ul className="collection">
                <li className="collection_item">
                    <input type="checkbox" />
                    <a href="#">Under $200 (11)</a>
                </li>
                <li className="collection_item">
                    <input type="checkbox" />
                    <a href="#">$200-$500 (71)</a>
                </li>
                <li className="collection_item">
                    <input type="checkbox" />
                    <a href="#">$500-$100 (148)</a>
                </li>
                <li className="collection_item">
                    <input type="checkbox" />
                    <a href="#">$1000-$1500 (57)</a>
                </li>
                <li className="collection_item">
                    <input type="checkbox" />
                    <a href="#">$1500-$2000 (25)</a>
                </li>
                <li className="collection_item">
                    <input type="checkbox" />
                    <a href="#">$2000-$2500 (5)</a>
                </li>
                <li className="collection_item">
                    <input type="checkbox" />
                    <a href="#">$2500-$3000 (4)</a>
                </li>
                <li className="collection_item">
                    <input type="checkbox" />
                    <a href="#">$3000 and up (2)</a>
                </li>
            </ul>
        </div>
    )
}

export default Prise;