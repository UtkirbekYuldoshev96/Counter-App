import React, {Component} from 'react';
import Counters from "./Components/Counters";
import Navbar from "./Components/Navbar";

class App extends Component {
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counters[index]}
        counters[index].value++;
        this.setState({counters});
    };

    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counters[index]}
        counters[index].value--;
        this.setState({counters});
    };

    handleReset = counter => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters})
    };

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    };

    handleRestart = () => {
        window.location.reload();
    };


    render() {
        return (
            <div className="bg-info">
                <Navbar
                    totalCounters={this.state.counters.filter(c => c.value > 0).length}
                />
                <main className="container">
                  <Counters
                      counters={this.state.counters}
                      onReset={this.state.handleReset}
                      onIncriment={this.state.handleIncrement}
                      onDecrement={this.state.handleDecrement}
                      onDelete={this.state.handleDelete}
                      onRestart={this.state.handleRestart}

                  />
                </main>
            </div>
        );
    }
}

export default App;