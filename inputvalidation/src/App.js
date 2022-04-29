import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';

function App() {
  let a = 10
  let b = 5
  return (
    <div className="">
      <header className="">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          <li>First Name</li>
          <li>Last Name</li>
          <li>Email</li>
          <li>Phone</li>
          <li>Address</li>
        </ul>
        <h1 data-testid="myheader">Welcome to my testing network</h1>
        <p title='sum'>{a+b}</p>
      </header>
      <Login />
    </div>
  );
}

export default App;
