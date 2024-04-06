import React from 'react'
import Breadcrumb from '../../../Common/Breadcrumb';
import Queue from './Queue';

const Animation = () => {

    document.title = "Animation" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <React.Fragment>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Plugins" pageTitle="Animation" />

            <h1>Queue Animation</h1>
            <Queue />
        </React.Fragment>
    )
}

export default Animation