import './App.css';
import { AppHeader } from './components/AppHeader';
import { ApplicationRoutes } from './routes/ApplicationRoutes';

function App() {
  return (
    <div id="pageContent">
      <AppHeader logo="Popular Movies" />
      <ApplicationRoutes />
    </div>
  );
}

export default App;