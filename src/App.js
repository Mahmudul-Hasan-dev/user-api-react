import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <h2>USER API REACT</h2>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  //use effect structure
  //useEffect(()=>{},[])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h4>total user:{users.length} </h4>
      {/* <h4>User Name:</h4>
      <h4>User Job:{ }</h4> */}
      {
        users.map(user => <User name={user.name} mail={user.email}> </User>)
      }
    </div >
  )
}
function User(props) {
  return (
    <div className='user'>
      <h2>name:{props.name}</h2>
      <h2>mail:{props.mail}</h2>


    </div>
  )
}

export default App;
