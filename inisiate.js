class Component {
  constructor(){
    this.state = {
      value: 0
    }
  }
  handleClick(value){
    this.setState({value: value})
  }
  render({handleClick, value}){
    return <div>
      {value}
      <button onClick={ e => handleClick(value + 1)}> + </button>
    </div>
  }
}