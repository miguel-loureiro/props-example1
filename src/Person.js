import React from 'react';

const Person = (props) => {
    return(
        <div>
            <p> Hi my name is {props.name} and i am {props.age} years old  {props.children} </p>
        </div>
    )
}

export default Person;
