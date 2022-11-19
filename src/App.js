import { Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './components/auth/sigin';
import SignUp from './components/auth/signup';
import Dashboard from './components/dashboard/dashboard';
import Navbar from './components/layout/navbar';
import CreateProject from './components/projects/createproject';
import ProjectDetails from "./components/projects/projectdetails"

function App() {
  return (
    <div className="App relative w-full">
     <Navbar/>
     <div>
     <Routes>
     <Route path="/" exact element={<Dashboard/>}/>
     <Route path="/project/:id" element={<ProjectDetails/>}/>
     <Route path="/signin" element={<SignIn/>}/>
     <Route path="/signUp" element={<SignUp/>}/>
     <Route path="/create" element={<CreateProject/>}/>
     </Routes>
     </div>
    </div>
  );
}

export default App;
