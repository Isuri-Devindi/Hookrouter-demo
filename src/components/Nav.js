import React from 'react'
import {A} from 'hookrouter'
import { BiStore } from 'react-icons/bi';
function Nav() {
        return (
            <div>
                <nav>
                    
                        <h3><BiStore/></h3>
                    
                    
                    <ul className='nav-links'>
                         <A className='Link' href='/'>
                        <li>HOME</li>
                        </A>
                        <A className='Link' href='/about'>
                        <li>ABOUT</li>
                        </A>
                        <A className='Link' href='/shop'>
                        <li>SHOP</li>
                        </A>
    
                    </ul>
                </nav>
            </div>
        )
    }
    
export default Nav