import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

const puppyPicture = {
    src:'https://images.unsplash.com/photo-1546238232-20216dec9f72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3107&q=80',
    author:'https://unsplash.com/@bk010397',
}

const puppies = (
    <div>
        <h1 className="heading">Some adorable puppies..</h1>
        <img src={puppyPicture.src} alt="labradores"/>
        <p><a href={puppyPicture.author} target="_blank">Source</a> </p>
    </div>
)

ReactDOM.render(puppies,document.getElementById('root'));

