import React from 'react';

class TestingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: "This is Testing Component.", color: "yellow"};
  }
  componentDidMount() {
    console.log("Component Did Mount"); 
    setInterval(() => {
      let newColor = this.props.updatedColor; 
      if (this.state.color === this.props.updatedColor) {
        newColor = this.props.color;
      }
      this.setState({ color: newColor }); 
    }, 2000)
  }
  static getDerivedStateFromProps(props, state) {
    console.log(state.color);
    return {};
  }
  shouldComponentUpdate() {
    console.log("Checking should component update");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("get Snapshot Before Update");
    document.getElementById("history").innerHTML = "<h6>Before the update, the component background color should be <span style='color:"+prevState.color+"'>" + prevState.color + "</span></h6>";
  }
  render() {
    const myStyle = { color: this.state.color }; 
    return (
      <div>
        <h1 style={myStyle}>{this.state.content}</h1>
        <div id="history"></div>
        <div id="current"></div>
        <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
  componentDidUpdate() {
    console.log("Component Did update"); 
    document.getElementById("current").innerHTML = "<h6>After updated, teh component background color changed to <span style='color:"+this.state.color+"'>" + this.state.color + "</span></h6>";
  }
  changeColor = () => {
    this.setState({color: "yellow"});
  }
}

export {TestingComponent}; 

