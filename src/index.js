import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Question from './Question';


const App = () => {
    return (
        <Question 
            header={faker.lorem.words()}
            description={faker.lorem.paragraph()}
        />
    );
       

};

ReactDOM.render(<App />,document.querySelector('#root'));