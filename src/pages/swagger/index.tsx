import React from 'react';
import { RedocStandalone } from 'redoc';


const SwaggerRedoc: React.FC = () => {
    return (
        <RedocStandalone specUrl="http://192.168.1.9:8199/api.json"/>
    )
}

export default SwaggerRedoc