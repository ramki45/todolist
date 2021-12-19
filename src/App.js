
import { useState } from 'react';
import './App.css';
import './Todo.css';


function App() {

  const [value,setvalue] = useState([]);
  
  const [id,setid] = useState([]);
  
  
  
  
  let handleClick = () => {
   
      setvalue([...value, `Task ${value.length + 1}`])
  }

  let removeClick = () => {
    setid([...id, `id ${id.length}`])
  
      document.getElementById(`id.length`).remove();
  }
  return ( <div className="container">
    <p>TODO LIST</p>
  <div className="row">
      <div className="col-md-12">
          <div className="card card-white">
            
              <div className ='buttonele'>
                    <button className= 'new btn btn-primary'  onClick={handleClick}>ADD</button>
                      <br/>
                    
                      </div>
                    <ul>
                      {
                     
                       (value.map((item) => <li id = 'id.length'>{item}
                        <br/> <span>Eat, Sleep, Repeat</span> <span className= 'del btn btn-danger' onClick={removeClick}>DELETE</span>
                      </li>))
                      

                    }
                      </ul>  
                     
                      </div>
                
                </div>
                </div>
                </div>
                
        );
}

export default App;
