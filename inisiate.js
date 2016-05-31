class Component {
  constructor(){
    this.state = {
      value: 0
      value2: 1
    }
  }
  handleClick(value, value2){
    this.setState({value: value, value2: value2})
  }
  render(){
    let {value, value2} = this.state
    let handleClick = this.handleClick.bind(this)
    return <div>
      {value2}
      <button onClick={ e => handleClick(value2, value + value2)}> fib </button>
    </div>
  }
}