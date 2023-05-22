import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './App.scss';
import Login from './component/Login/Login';
import Employee from './component/Employee/Employee';

function App() {
  return (
    <div className="App">
       <Router>
         <Routes>
           <Route path='/' element={<Login />} />
           <Route path='/employee' element={<Employee />} />
         </Routes>
       </Router>
    </div>
  );
}

export default App;
