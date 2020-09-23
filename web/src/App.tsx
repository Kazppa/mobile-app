import React from 'react';
import logo, {ReactComponent} from './logo.svg';
import './App.css';
import {isFunctionOrConstructorTypeNode} from 'typescript';

export default class App extends React.Component {
    state = {
        display: false
    }

    click = () => {
        this.setState({display: !this.state.display});
    }

    render() {
        console.log(this.state.display);

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    {this.state.display &&
                    <div>BUTTON WAS CLICKED</div>
                    }
                    <button onClick={this.click}>
                        CLICK ME
                    </button>
                </header>
            </div>
        );
    }
}


//export default App;
