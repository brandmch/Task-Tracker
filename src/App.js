import './App.css';
import Header from './components/Header';

function App() {

  const name = 'BeastMaster64'

  return (
    <div className="backg">
      <h1>Hello {name}!</h1>
      <Header title='WorkoutTracker'/>
    </div>

  );
}

export default App;
