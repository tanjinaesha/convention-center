import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Person from '../Person/Person';

const Persons = () => {
    const [persons,setPersons]=useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        .then(data => setPersons(data))
      },[])

    return (
        <div>
            <h1>hi{persons.length}</h1>
            {
                persons.map(person=><Person person={person}></Person>)
            }
        </div>
        
    );
};

export default Persons;