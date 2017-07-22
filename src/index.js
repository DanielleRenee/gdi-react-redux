import React from 'react';
import ReactDOM from 'react-dom';
// have to install it seperatly

import App from './App.jsx';
import MySecondComponent from './components/MySecondComponent.jsx';

// using a loader
import './style.css';

ReactDOM.render(
    <App />,
    document.getElementById('app-root'),
    // this is coming from index.html - it is a div id
);


ReactDOM.render(
    <MySecondComponent />,
    document.getElementById('my-second-component')
);


// ReactDOM.render(
//     <MyHeaderComponent />,
//     document.getElementById('my-header-component')
// );

// this anchors our react, everything is a deault export so no curly braces are needed