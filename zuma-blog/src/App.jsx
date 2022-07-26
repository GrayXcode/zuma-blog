import './App.css';
import AppLayout from './Layout/AppLayout'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
     <AppLayout>
        <Home />
     </AppLayout>
    </div>
  );
}

export default App;
