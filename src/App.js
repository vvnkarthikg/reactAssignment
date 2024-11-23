import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import FirstComponent from './components/FirstComponent.jsx';
import SecondComponent from './components/SecondComponent.jsx';
import ThirdComponent from './components/ThirdComponent.jsx';
import PlansPricing from './components/HeaderComponents/PlansPricing.jsx';
import ProductTour from './components/HeaderComponents/ProductTour.jsx';
import Blog from './components/HeaderComponents/Blog.jsx';
import Security from './components/HeaderComponents/Security.jsx';
import PasswordGenerator from './components/HeaderComponents/PasswordGenerator.jsx';
import Customers from './components/HeaderComponents/Customers.jsx';
import Help from './components/HeaderComponents/Help.jsx';



function App() {
  return (
    <Router>
      <Header />
      <Routes>     
      <Route
          path="/"
          element={
            <div>
              <FirstComponent />
              <SecondComponent />
              <ThirdComponent />
            </div>
          }
        />

        <Route path="/PlansPricing" element={<PlansPricing />} />
        <Route path="/ProductTour" element={<ProductTour />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Security" element={<Security />} />
        <Route path="/PasswordGenerator" element={<PasswordGenerator />} />
        <Route path="/Customers" element={<Customers />} />
        <Route path="/Help" element={<Help />} />

        

      </Routes>
    </Router>
  );
}

export default App;
