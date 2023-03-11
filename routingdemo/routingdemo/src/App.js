import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Customers from './pages/Customers';
import Products from './pages/Products';
import Header from './components/Header.module';


function App() {
  return (
    <div>
     <Header></Header>
      <Routes>
        <Route path="/customers"element={<Customers/>}/>
        <Route path="/customers/:id"element={<Customers/>}/>
         <Route path="/products" element={<Products/>}/>
      </Routes>
    </div>
  );
};

export default App;
