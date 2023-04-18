import React from 'react';
import "./Title.scss"
function Title(props) {
    return (
        <div className='Title'>
            <p className='Title__first'>{props.first}</p>
            <p className='Title__second'>{props.second}</p>
        </div>
    );
}

export default Title;