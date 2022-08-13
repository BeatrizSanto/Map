import React,{Component} from 'react';

export default class App extends
Component{
 
  state ={
    dados:[
  {
      name:"",
      age: ,
      amigo:""
    },
    {
      name:"",
      age: ,
      amigo:""
    },
    {
      name:"",
      age: ,
      amigo:""
    },
    {
      name:"",
      age: ,
      amigo:""
    },{
      name:"",
      age: ,
      amigo:""
    }
    {
      name:"",
      age:,
      amigo:""

    }
  ]
}
render(){
  return(
    <div>
      {this.state.map((item) =>(
        <div>
          <h2>Name:{item.name}</h2>
          <h2>Team:{item.amigo}</h2>
          </div>
      ))}
    </div>
  )
}
}
