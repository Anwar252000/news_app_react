import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route element={<News key='sports' category='sports'  h1title='Sports'/>} exact path='/sports'/>
    <Route element={<News key='business' category='business' h1title='Business'/>} exact path='/business'/>
    <Route element={<News key='entertainment' category='entertainment' h1title='Entertainment'/>} exact path='/entertainment'/>
    <Route element={<News key='general' category='general' h1title='General'/>} exact path='/general'/>
    <Route element={<News key='health' category='health' h1title='Health'/>} exact path='/health'/>
    <Route element={<News key='science' category='science' h1title='Science'/>} exact path='/science'/>
    <Route element={<News key='technology' category='technology' h1title='Technology'/>} exact path='/technology'/>
    <Route element={<Contact/>} exact path='/contact'/>
    <Route element={<About/>} exact path='/about'/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
