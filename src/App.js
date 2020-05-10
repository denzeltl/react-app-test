import React from 'react';
import Navbar from './Navbar';
import Greeter from './Greeter';
import Counter from './Counter';
import MoodToggler from './MoodToggler';
import './App.css';

function App() {
    return (
        <div>
            <Counter step={5} />
            <Counter />
            <MoodToggler />
            <Navbar />
            <Greeter name="Denzel" age="23" excitement={4} />
            <Greeter name="Mike" age="51" excitement={1} />
            <h1>HELLO!</h1>
        </div>
    );
}

export default App;
