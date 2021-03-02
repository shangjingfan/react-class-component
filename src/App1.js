import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 1
    }
  }

  onClick = () => this.setState((state) => {
    const x = state.x + 1
    return {x}
  })

  render() {
    return (
      <div className="App">
        App <button onClick={this.onClick}>+1</button>
        <B name={this.state.x}></B>
      </div>
    );
  }
}

class B extends React.Component {
  componentWillReceiveProps(nextProps, nextContext) {
    console.log("旧的props", this.props)
    console.log("props变化了")
    console.log("新的props", nextProps)
  }

  render() {
    // console.log(this.props)
    return (
      <div>{this.props.name}</div>
    )
  }
}

export default App;
