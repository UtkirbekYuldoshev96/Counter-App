import React, {Component} from 'react';

class Counters extends Component {
    render() {
        const {
            onReset, onIncriment, onDelete, onDecrement, countrs, onRestart
        } = this.props;

        return (
            <div>
                <button
                    className="btn btn-success m-2"
                    onClick={onReset}
                    disabled={countrs.lenght === 0 ? "disabled" : ""}
                >
                    <i className="fa fa-refresh" aria-hidden={}></i>
                </button>
            </div>
        );
    }
}

export default Counters;