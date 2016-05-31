class Component {
  constructor(){
    this.state = {
      value: 0
      value2: 1
    }
  }
  updateFib(){
    const {value, value2} = this.state
    let newValue = value2
    let newValue2 = value + value2
    this.setState({value: newValue, value2: newValue2})
  }
  render(){
    let handleClick = this.updateFib.bind(this)
    return <div>
      {value2}
      <button onClick={ e => handleClick()}> fib </button>
    </div>
  }
}