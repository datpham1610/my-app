import "antd/dist/antd.css"; 
import React from 'react'
import {AuthButton} from '../components/AuthButton'
import CustomLink from './CustomLink'
import {Link} from 'react-router-dom'

export default class Nav extends React.Component {
    render() {
        return (
                <div>
                    <nav>
                        <ul className="list-inline">
                            <CustomLink activeOnlyeExact={true} to="/" label="Home"></CustomLink>
                            <CustomLink to="/todos" label="Todo List"></CustomLink>
                            <li className="list-inline-item">
                                <Link to="/About">About</Link>
                            </li>
                            <li className="list-inline-item">
                                <AuthButton/>
                            </li>
                        </ul>
                    </nav>
                </div>
        )
    }
}
