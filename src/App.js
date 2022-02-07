import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Registration from './Registration';
import Footer from './Footer';
import Hobbies from './Hobbies';
import CounterByTwo from './CounterByTwo';
import LoginAlert from './LoginAlert';
import Native from './Native';


function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Registration></Registration>
      <Hobbies></Hobbies>
      <Native></Native>
      <LoginAlert></LoginAlert>
      <CounterByTwo></CounterByTwo>
      <Footer></Footer>
    </div>
  );
}

export default App;
