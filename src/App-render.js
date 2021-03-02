import React from 'react'

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      array: [1, 2, 3],
      n: 1
    }
  }
// onClick = () => this.setState(state => ({n: state.n + 1}))
  render() {
    return this.state.array.map(n=><div key={n}>{n}</div>)
  }
}

export default App