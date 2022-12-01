import './App.css';
import freeCodeCampLogo from "./img/freeCodeCampLogo.png";
import TaskList from './components/taskList';

function App() {
  return (
    <div className="App">
      <img src={freeCodeCampLogo}
      alt="freeCodeCamp Logo"/>
      <div className='task-container'>
        <h1>Task List</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
