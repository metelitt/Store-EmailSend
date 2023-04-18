import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Breadcrumbs(props) {
    const location=useLocation();
    let currentLink=''
    const crumbs=location.pathname.split('/').filter(crumb=>crumb !=='').map(crumb=>{
        currentLink=+`/${crumb}`
        return(
            <div key={crumb}>
                <Link to={currentLink}>{crumb}</Link>
            </div>
        )
    })
    return (
        <div>
            {crumbs}
        </div>
    );
}
