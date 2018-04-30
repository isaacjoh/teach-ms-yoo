import React from "react";

class Picture extends React.Component {
  render() {
    const ratio = this.props.ratio ? '' : 'is-4by3'
    return (
      <div className="picture-component">
        <div className="card">
          <div className="card-image">
            <figure className={"image " + ratio}>
              <img src={this.props.src} alt="pic" />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">{this.props.text}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Picture;
