import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const propTypes = {
};

class Hello extends Component {
  render() {
    return (
      <div></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

Hello.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);
