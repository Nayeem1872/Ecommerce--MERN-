import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    
    <main className="py-3">
    <Container>
    <Routes>
      
        {/* <HomeScreen /> */}
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/product/:id" element={<ProductScreen/>} />
      
      </Routes>
      </Container>
    </main>

   
    <Footer />
    </BrowserRouter>
  
  );
}

export default App;
 