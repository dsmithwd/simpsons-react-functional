// import React, { Component } from "react";

// class Quote extends Component {
//   render() {
//     const { quote } = this.props;

//     return <p>{quote}</p>;
//   }
// }

// export default Quote;

import React from "react";

const Quote = (props) => {
  const { quote } = props;

  return <p>{quote}</p>;
};

export default Quote;
