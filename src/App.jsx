import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signup } from './pages/Signup'; // Adjust the import path as necessary
//import { Signin } from './pages/Signin'; // Adjust the import path as necessary
//import Dashboard from './components/Dashboard'; // Adjust the import path as necessary


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
