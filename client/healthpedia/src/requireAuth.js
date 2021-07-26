

import React, { Component } from "react";
import { connect } from "react-redux";

export default (ChildComponent) => {
  //component

  class ComposedComponent extends Component {
    componentDidMount() {
      //is something inside of our global  state for auth
      this.isAuthenticated();
    }

    componentDidUpdate() {
      this.isAuthenticated();
    }

    isAuthenticated = () => {
      if (!this.props.auth) {
        this.props.history.push("/"); //redirecting user to home page when not logged in
      }
    };

    render() {
      return (
        <>
          <ChildComponent {...this.props} />
        </>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      auth: state.auth,
    };
  };

  return connect(mapStateToProps, null)(ComposedComponent);
};