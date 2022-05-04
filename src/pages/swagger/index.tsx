import React from 'react';
import { RedocStandalone } from 'redoc';


const SwaggerRedoc: React.FC = () => {
    return (
        <RedocStandalone specUrl="/api.json"/>
    )
}

export default SwaggerRedoc