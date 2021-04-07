import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppHeader.scss';

export class AppHeader extends React.Component {
    render() {
        return (
            <div>
                <li>
                    <NavLink exact to='/'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/shoping'>Shoping List</NavLink>
                </li>
            </div>
        );
    }
}
