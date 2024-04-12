import React, {useState} from 'react'
import Header from './components/Header'
import Aside from './components/Aside'
import Footer from './components/Footer'
import Product from './components/Product'
import Brand from './components/Brand'
import Home from './components/Home'
import Content from './components/Content'

const App = () => {
  const [activeComponent, setActiveComponent] = useState(<Content />);

  const handleProductClick = (selectedSection) => {
    setActiveComponent(<Product />);
  };

  return (
    <>
      <div>
        <Header></Header>
        <Aside handleProductClick={handleProductClick}></Aside>
        <Content></Content>
        <Footer></Footer>
      </div>
    </>
  );
};

export default App;
