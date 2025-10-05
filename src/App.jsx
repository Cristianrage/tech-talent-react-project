import React from 'react';  
import Header from './components/Header';  
import Nav from './components/Nav';  
import Main from './components/Main';  
import Gallery from './components/Gallery';  
import Footer from './components/Footer';  
import Productos from './components/Productos';


function App() {  
    return (  
        <div>  
            <Header />  
            <Nav />  
            <Main />
            <Productos/>  
            <Gallery />  
            <Footer />  
        </div>  
    );  
}  
export default App;