import React from 'react';
import { Link } from 'react-router-dom';
import './ShopingPreview.scss';
export function ContactPreview({ contact }) {
    return (
        <Link to={'/contact/' + contact._id}>
            <div className='contact-preview'>
                <img src={`https://robohash.org/${contact._id}`} alt='' />
                <h1>{contact.name}</h1>
                <h2>{contact.email}</h2>
                <h2>{contact.phone}</h2>
            </div>
        </Link>
    );
}
