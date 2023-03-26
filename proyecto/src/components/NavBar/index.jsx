import React from 'react'
import CartWidget from '../CartWIdget'
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='container'>
            <nav className='nav'>
                <div>
                <NavLink className='nav_link' to='/'>Fragancias</NavLink>
                </div>
                <ul className='nav_list'>                 
                    <li>
                        <NavLink className='nav_link' to='/categoria/femenino'>Femeninas</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav_link' to='/categoria/masculino'>Masculinas</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav_link' to='/cart'>
                            <CartWidget />
                        </NavLink>
                    </li>
                </ul>

            </nav>
        </div>
    )
}

export default NavBar