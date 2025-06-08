//import logo from './logo.svg';
import './App.css';

//components
import Header from './components/Header';
import Todoform from './components/Todofrom';
import Todos from './components/Todos';
function App() {
  return (
    <div>
      <Header />
      <Todoform/>
      <Todos />
    </div>
  );
}

export default App;
