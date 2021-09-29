import React from 'react';
import './Material.css';

const Material = () => {
    return (
        <div className="material">
            <p>Material</p>
            <div className="materialHR"></div>
            <ul className="collection">
                <li className="collection_item">
                    <input type="checkbox" />
                    <a href="#">Traditional (68)</a>
                </li>
                <li className="collection_item">
                    <input type="checkbox" />
                    <a href="#">Modern / Contemporary (96)</a>
                </li>
                <li className="collection_item">
                    <input type="checkbox" />
                    <a href="#">Transitional (111)</a>
                </li>
                <li className="collection_item">
                    <input type="checkbox" />
                    <a href="#">Mid-Century (64)</a>
                </li>
                <li className="collection_item">
                    <input type="checkbox" />
                    <a href="#">Farmhouse / Cottage (4)</a>
                </li>
            </ul>
        </div>
    )
}

export default Material
