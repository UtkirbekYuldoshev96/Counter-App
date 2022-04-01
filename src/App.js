import React, {Component} from 'react';
import Counters from "./Components/Counters";

class App extends Component {
    render() {
        return (
            <>
        <main className="container">
          <Counters/>
        </main>
            </>
        );
    }
}

export default App;