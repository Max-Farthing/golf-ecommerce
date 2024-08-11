import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MainNavigation() {
  return (
    <nav>
        <ul>
            <li>
                <NavLink>
                    Home
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}
