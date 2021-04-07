import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppHeader.scss';

export class AppHeader extends React.Component {
    render() {
        return (
            <section className='App-Header'>
                <div className='first-child'>
                    <h1>Shops Place</h1>
                </div>
                <div className='second-child'>
                    <ul>
                        <li>
                            <NavLink exact to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/product'>Shoping List</NavLink>
                        </li>
                        <li>
                            <NavLink to='/cart'>Cart</NavLink>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}
