import React from 'react';
import Color from '../color/Color';
import Design from '../design/Design';
import Material from '../material/Material';
import Prise from '../price/Prise';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <p>Browse Categories</p>
                <div className="hr"></div>
                <ul className="collection">
                    <li className="collection_item">
                        <a href="#">Living Room Furniture</a>
                    </li>
                    <li className="collection_item">
                        <a href="#">Bedroom Furniture</a>
                    </li>
                    <li className="collection_item">
                        <a href="#">Mattresses</a>
                    </li>
                    <li className="collection_item">
                        <a href="#">Dining Room & Bar Furniture</a>
                    </li>
                    <li className="collection_item">
                        <a href="#">Kitchen Furniture</a>
                    </li>
                    <li className="collection_item">
                        <a href="#">Patio & Outdoor Furniture</a>
                    </li>
                    <li className="collection_item">
                        <a href="#">Office Furniture</a>
                    </li>
                    <li className="collection_item">
                        <a href="#">Bathroom Furniture</a>
                    </li>
                    <li className="collection_item">
                        <a href="#">Cabinets</a>
                    </li>
                    <li className="collection_item">
                        <a href="#">Shelving</a>
                    </li>
                    <li className="collection_item">
                        <a href="#">Vanities</a>
                    </li>
                </ul>
            </div>
            <Material />
            <Color />
            <Design />
            <Prise />
        </>
    )
}

export default Sidebar
