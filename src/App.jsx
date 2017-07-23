import React from 'react';
import Header from './components/Header.jsx';
import Image from './components/Image.jsx';
import HelloGoodbye from './components/HelloWorld.jsx';
import NameAnnouncer from './components/NameAnnouncer.jsx';
import ButtonToggle from './components/ButtonToggle.jsx';
import ButtonCounter from './components/ButtonCounter.jsx'

const App = () => {
    return (
        <div className="App">
         <Header />
         <HelloGoodbye />
         <NameAnnouncer />
         <ButtonToggle />
         <ButtonCounter />
         <Image url="https://dvif77labeimb.cloudfront.net/640x400_9643243101e4b2c4425325218b59cb04201407101137082.jpeg"/>
            Hello from the App component!
        </div>
    );
};

export default App;
