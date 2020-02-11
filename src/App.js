import React from 'react';
import './App.css';

class App extends React.Component {
  constructor (props){
    super (props);
    this.state ={         
        color: null,
    }
}
  
render (){ 
  console.log(this.state)
  let redOn = '';
  if(this.state.color === 'red') redOn = 'selected';      
  let yellowOn = '';
  if(this.state.color === 'yellow') yellowOn = 'selected';     
  let greenOn = '';
  if(this.state.color === 'green') greenOn = 'selected';
   
  return (
    <div className="container">
      <div className='stick mx-auto d-block'></div>
      <div className='traffic mx-auto p-2'>                   
        <span className={"red light d-block rounded-circle my-3 mx-auto " + redOn} onClick={()=>this.setState({color: 'red'})}></span>        
        <span  className={"yellow light d-block rounded-circle my-3 mx-auto " + yellowOn} onClick={()=>this.setState({color: 'yellow'})}></span>      
        <span  className={"green light d-block rounded-circle my-3 mx-auto bg-success " + greenOn} onClick={()=>this.setState({color: 'green'})}></span>                
      </div>
    </div>
  );
}
}

export default App;
