import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';

function Jumbo(){
return (
    <div className="margin-t-b">
            <Jumbotron>
            <h1>Welcome to Deduplicate</h1>
            <p>
            This will help you to identify duplicate customers in a data set. 
            The application takes xml, csv, json as input. It also considers input from different Databases.
            </p>
            </Jumbotron>
        </div>
);
}

export default Jumbo