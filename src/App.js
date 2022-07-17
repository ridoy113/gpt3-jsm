import './App.css';
import { Footer, Blog, Possibility, Featuers, WhatGPT3, Header } from './containers/index';
import { CTA, Brand, Navbar } from './components/indes';



function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Featuers />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
