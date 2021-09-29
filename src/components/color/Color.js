import React from 'react';
import './Color.css';

const Color = () => {
    return (
        <div className="sidebar_color">
            <p>Color</p>
            <div className="hr"></div>
            <ul className="collection">
                <li className="collection_item">
                    <input type="checkbox" />
                    <a href="#">Beige (171)</a>
                </li>
                <li className="collection_item">
                    <input type="checkbox" />
                    <a href="#">Black (65)</a>
                </li>
                <li className="collection_item">
                    <input type="checkbox" />
                    <a href="#">White (105)</a>
                </li>
                <li className="collection_item">
                    <input type="checkbox" />
                    <a href="#">Blue (90)</a>
                </li>
                <li className="collection_item">
                    <input type="checkbox" />
                    <a href="#">Brown (125)</a>
                </li>
            </ul>
        </div>
    )
}

export default Color
