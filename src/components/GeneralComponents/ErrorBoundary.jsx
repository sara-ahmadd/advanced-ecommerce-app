import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorOcurred: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      errorOcurred: true,
    };
  }
  render() {
    if (this.state.errorOcurred === true) {
      return (
        <h1 className="container custom-container ">
          Somthing went wrong with your component.
        </h1>
      );
    } else {
      return this.props.children;
    }
  }
}
