
import React,{ useState,useEffect} from 'react';
import { findRenderedDOMComponentWithTag } from 'react-dom/cjs/react-dom-test-utils.development';
import './App.css';
import Navigation from './Components/Navigation'


function App() {
  const url= 'https://api.mocki.io/v1/b043df5a'
  const[todos,setTodos]= useState()
const fetchApi = async () => { 
  const  response = await fetch(url)
const responseJSON= await response.json();
setTodos(responseJSON)
}
 useEffect(()=>{
   fetchApi()
 },[])
  return (
    <React.Fragment>
     <Navigation/>
    
    <div className= "container">     
<div className="row mt-5">
 
            {!todos ? 'cargando':todos.map((todo,index)=>
            {return  <div className="col-md-4">
              <div className="card text-dark bg-light mb-3" >
                        <div className="card-header"><h6>Nombre :</h6> {todo.name}</div>
                        <div className="card-body">
                          <h5 className="card-title"> Ciudad:</h5>
                          <p className="card-text">{todo.city}</p>
                      </div>
                    </div>     </div>                                  
         })}
  
  </div>
    </div>

   
 </React.Fragment>
  );

}
export default App;

 