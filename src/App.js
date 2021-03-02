import React from 'react'
// componentDidMount
class App extends React.PureComponent {
  divRef = undefined;
  constructor(props) {
    super(props);
    this.state={
      width: null
    }
    this.divRef = React.createRef()
  }
  componentDidMount(){
    const div = this.divRef.current
    const {width} = div.getBoundingClientRect()
    this.setState({width})
  }
  render(){
    return(
      <div ref={this.divRef}>hello,world, div的宽度是{this.state.width}</div>
    )
  }
}
export default App