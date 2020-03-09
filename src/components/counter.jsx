import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Counter.css";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter.value !== this.props.counter.value) {
      // Make Ajax call and get new data from the server
      console.log("Fetching new data from server");
    }
  }

  componentWillUnmount() {
    console.log("Counter - unmount");
  }

  render() {
    console.log("Counter - Rendered");
    const { onIncrement, onDelete, counter } = this.props;
    return (
      <div className="counter">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-1 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
