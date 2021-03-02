import React from "react"
// 生命周期函数shouldComponentUpdate()
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 1
    }
  }

  addN = () =>{
    this.setState(state => ({
      n: state.n + 1
    }))
    this.setState(state => ({
      n: state.n - 1
    }))
    // 经过以上两个setState，一加一减，虽然每次都生成了新的对象，
    // 但是n的值没有变化，没有变化，就不需要每次点击都进行UI更新了，
    // 所以就用shouldComponentUpdate来阻止UI更新
  }
  shouldComponentUpdate(newProps, newState, newContext) {
    if(newState.n === this.state.n){
      return false
    }else{
      return true
    }
  }

  render() {
    console.log("render了");
    return (
      <div>App
        <div>
          n= {this.state.n}
          <button onClick={this.addN}>+1</button>
        </div>
      </div>
    )
  }
}

export default App