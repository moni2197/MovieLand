
import './App.css';
import {useState,useEffect} from 'react';
const Person = (props) =>{
  return(
    <>
      <h1> Name : {props.name != null ? props.name : 'Name not passed'}</h1>
      <h2> LastName : {props.lastName != null ? props.lastName : 'LastName not passed'}</h2>
      <h3> Age : {props.age != null ? props.age : 'Age not passed'}</h3>
    </>
  )
} 

const App = () => {
  const name = 'Mohnish'
  const isNameShowing = true;

  const[counter , setCounter] = useState(0);

  useEffect(()=>{
    alert("You have changed the counter to " + counter)
  },[counter]);
  
  return (
    <div className="App">
      <Person/>
      <Person 
            name = {'Rock'} 
            lastName = {'The'} 
            age  = {'50'}
      />
      {name ? (
        <>
          <h1>Hello,{isNameShowing ? name : 'Someone'}</h1>
        </>
      ) : (
        <>
          <h1> Test </h1>
          <h2> There is no name </h2>
        </>
      )

      }
    <button onClick={() => setCounter((prevCount)=>prevCount+1)}> + 
    </button>
    <h1> {counter} </h1>
    <button
      onClick={
        ()=> setCounter(
          (prevCount) => prevCount - 1
        )
      }
    > - </button>
    </div>
  );
}

export default App;
