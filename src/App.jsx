import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import SignUp from './component/SignUp';
import Items from './component/Items';
import Veg_rest from './component/Veg_rest';
import Non_rest from './component/non_rest';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/items' element={<Items/>}/>
        <Route path='/Veg_rest' element={<Veg_rest/>}/>
        <Route path='/non_rest' element={<Non_rest/>}/>
      </Routes>
    </Router>
  );
}

export default App;
