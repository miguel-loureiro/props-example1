import React from 'react';
import DeeperPerson1 from './DeeperPerson1';

const AnotherPerson = (props) => {
    return(
        <div>
            <p> Hi my name is {props.name} and i am {props.age} years old {props.children}</p>
            
            <DeeperPerson1 number = "99"/>
        </div>
    )
}

export default AnotherPerson;