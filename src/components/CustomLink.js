import React from 'react'
import classname from 'classnames'
import {Link, useRouteMatch} from "react-router-dom"; 

export default function CustomLink({label,to,activeOnlyeExact}) {
    let match  = useRouteMatch({
        path:to,
        exact:activeOnlyeExact
    })
    return (
        <li className={classname('list-inline-item',match ? 'active':'')}>
        
                <Link to={to}>{label}</Link>
        </li>
    )
}
