import hoge from "redux"
// let EXEC = 'EXEC'
// 
// let doThatActionCreator = function(value){
//   return {
//     action: EXEC,
//     payload: value
//   }
// }

class Store{
  constructor(){
    this.state = {}
  }
  setState(newState){
    // 本当は色々やっている
    this.state = newState
  }
}

const Component = ({handleClick, value}) => {
  return <div>
    {value}
    <button onClick={ e => handleClick(value + 1)}> + </button>
  </div>
}


