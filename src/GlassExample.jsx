import React, { Component } from "react";
import GlassMagnifier from "./GlassMagnifier";
import GlassExampleControls from "./GlassExampleControls";

class GlassExample extends Component {
  state = {
    allowOverflow: true,
    magnifierBorderSize: 3,
    magnifierBorderColor: "rgba(253, 136, 78, 1)",
    magnifierSize: "42%",
    square: false
  };

  handleSize = e => {
    const value = e.target.value + "%";
    this.setState(() => ({ magnifierSize: value }));
  };

  handleBorderSize = e => {
    const value = Number(e.target.value);
    this.setState(() => ({ magnifierBorderSize: value }));
  };

  handleBoolChange = key => e => {
    const value = Boolean(e.target.value);
    this.setState(() => ({ [key]: value }));
  };

  handleTextChange = key => e => {
    const value = e.target.value;
    this.setState(() => ({ [key]: value }));
  };

  render() {
    const {
      allowOverflow,
      magnifierSize,
      magnifierBorderSize,
      magnifierBorderColor,
      square
    } = this.state;

    const { image, largeImage, urlImageSrc } = this.props;

    return (
      <React.Fragment>
          <div className="flex">
            <GlassMagnifier
              className="input-position"
              imageSrc={image}
              largeImageSrc={largeImage}
              urlImageSrc={urlImageSrc}
              allowOverflow={allowOverflow}
              magnifierSize={magnifierSize}
              magnifierBorderSize={magnifierBorderSize}
              magnifierBorderColor={magnifierBorderColor}
              square={square}
            />
            {/* <GlassExampleControls
              handleSize={this.handleSize}
              handleBorderSize={this.handleBorderSize}
              handleBoolChange={this.handleBoolChange}
              handleTextChange={this.handleTextChange}
              borderColor={this.state.magnifierBorderColor}
            /> */}
          </div>
      </React.Fragment>
    );
  }
}

export default GlassExample;
