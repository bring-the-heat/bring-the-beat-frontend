import './App.css';
import SubmissionForm from './components/SubmissionForm';
import VoteForm from './components/VoteForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         🔥 Bring the Heat! 🔥  
      </header>
      <body>
        <SubmissionForm />
        <VoteForm />
      </body>
    </div>
  );
}

export default App;
