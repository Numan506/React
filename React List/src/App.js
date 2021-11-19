import React, { Component } from 'react';
import ReactList from './Components/ReactList';
import ListFromJson from './Components/ListFromJson';

class App extends Component {
    render() {
        return (
            <div>
                <ListFromJson />
            </div>
        );
    }
}

export default App;