import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';

// const reducer=(state,action)=>{
//    if(action.type ==='setImage'){
//     return action.data
//    }
//    else{
//     return state//initial state
//    }
// } 


// function App() {

//  const [state,setState]=useReducer(reducer,"");
//  console.log(state)

//   return (
//     <div >
//      <input type='text' placeholder='Enter image url' value={state} onChange={(e)=>{setState({
//       type:"setImage",
//       data:e.target.value
//  } )}}/>
//      <input type='text' placeholder='Enter your name'/>
//      <input type='text' placeholder='Enter your city'/>
//      <input type='text' placeholder='Enter your position'/>
//      <button>Set Data</button>

//      <div></div>
//     </div>

   
//   );
// }

// export default App;
const reducer=(state,action)=>{
   if(action.type ==='setImage'){
    return {...state,image:action.data}
   }
   else if(action.type==='setName'){
    return {...state,name:action.data}
   }
   else if(action.type==='setCity'){
    return {...state,city:action.data}
   }
   else if(action.type==='setPosition'){
    return {...state,position:action.data}
   }
   else if(action.type==='SetArray'){
    return {...state,dataArray:[...state.dataArray,action.data]}
   }
   else{
    return state//initial state
   }
} 


function App() {

 const [state,setState]=useReducer(reducer,{
  image:'',
  name:'',
  city:'',
  position:'',
  dataArray :[]

 });
 console.log(state)

  return (
    <div >
     <input type='text' placeholder='Enter image url' value={state.image} onChange={(e)=>{setState({
      type:"setImage",
      data:e.target.value
 } )}}/>
     <input type='text' placeholder='Enter your name' value={state.name} onChange={(e)=>setState({
      type:"setName",
      data:e.target.value
     })}/>
     <input type='text' placeholder='Enter your city' value={state.city} onChange={(e)=>setState({
      type:'setCity',
      data:e.target.value
     })}/>
     <input type='text' placeholder='Enter your position' value={state.position} onChange={(e)=>setState({
      type:'setPosition',
      data:e.target.value
     })}/>
     <button onClick={()=>setState({
      type:'SetArray',
      data:{
        image:state.image,
        name:state.name,
        city:state.city,
        position:state.position
      }
     })}>Set Data</button>

     <div>{
      //  state.dataArray?.map((dataArray.image,dataArray.name,dataArray.city,dataArray.position)=>{
      //       <h1>{dataArray.name}</h1>
      //  })
      }
    </div>
    </div>

   
  );
}

export default App;
