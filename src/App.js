import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <User>
       
      </User>
      
    </div>
  );
}

// use more than one component in one file
export function User(){
  function Apple(){
    return(
      <div>
        This is the ganesh
      </div>
    )
  }
  return(
    <div>
      <h1>I am user Component</h1>
      {/* first way  */}
      <Apple></Apple>
      {/* second way */}
      {Apple()}
    </div>
  )
}
export default App;
