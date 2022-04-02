import React, {Component} from 'react';
import Counter from "./Counter";

class Counters extends Component {
    render() {
        const {
            onReset, onIncriment, onDelete, onDecrement, counters, onRestart
        } = this.props;

        return (
            <div>
                <button
                    className="btn btn-success m-2"
                    onClick={onReset}
                    disabled={counters.length === 0 ? "disabled" : ""}
                >
                    <i className="fa fa-refresh" aria-hidden="true"></i>
                </button>

                <button className="btn btn-primary m-2"
                        onClick={onRestart}
                        disabled={counters.length !== 0 ? "disabled" : ""}
                >
                    <i className="fa fa-recycle" aria-hidden="true"></i>
                </button>
                {counters.map(counter => (
                    <Counter
                    key={counter.id}
                    counter={counter}
                    onIncriment={onIncriment}
                    onDecrement={onDecrement}
                    onDelete={onDelete}
                    />
                ))}
            </div>
        );
    }
}
export default Counters;