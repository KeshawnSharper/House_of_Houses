import React from "react";

class Capitalizer extends React.Component {
  render() {
    const { name } = this.props;
    const capitalizedName = name[0].toUpperCase();

    // We are CALLING the children prop!
    return this.props.children(capitalizedName);
  }
}
export default Capitalizer;
