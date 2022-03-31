import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './RevewOrder.css'
const RevewOrder = (props) => {
    const { name, price, shipping, quantity, img } = props.product
    return (
        <div>
            <div className='review-items'>
                <img src={img} alt="" />
                <div className='review-detail-container'>
                    <div className='review-detail'>
                        <p>Name:{name}</p>
                        <p><span>Price:{price}</span></p>
                        <p><span>shipping:{shipping}</span></p>
                        <p><span>quantity:{quantity}</span></p>

                    </div>
                    <div className='delete-container'>
                        <button onClick={() => props.removeHandler(props.product)} className='dlt-button'>
                            <FontAwesomeIcon className='dlt-icon' icon={faTrashAlt}></FontAwesomeIcon>

                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RevewOrder;