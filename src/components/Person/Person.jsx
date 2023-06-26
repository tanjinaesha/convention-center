import React from 'react';

const Person = (props) => {
    const{area,region,name}=props.person;
    return (
        <div>
            <p>area{area}</p>
            <p>region{region}</p>
            <p>name {name.common}</p>
        </div>
    );
};

export default Person;