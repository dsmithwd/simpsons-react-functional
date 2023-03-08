// import React, { Component } from "react";

// class Image extends Component {
//   render() {
//     const { image, name } = this.props;

//     return <img src={image} alt={name} />;
//   }
// }

// export default Image;

import React from "react";

const Image = (props) => {
  const { image, name } = props;

  return <img src={image} alt={name} />;
};

export default Image;
