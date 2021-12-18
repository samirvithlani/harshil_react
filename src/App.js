import logo from './logo.svg';
import './App.css';
import { Signup } from './component/signup';
import Login from './component/login';
import { LoginForm } from './component/LoginForm';

function App() {
  var no1 = 100
  var no2 = 200
  var name = "harshil"

  var users = [{
    name: "samir",
    id: 101,
    age: 15
  },
  {
    name: "harshik",
    id: 102,
    age: 14
  }
  ]
  return (
    <div>

    <LoginForm/>

    </div>
  );
}

export default App;
