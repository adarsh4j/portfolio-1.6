import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Loading from '../src/loading'
import Portfolio from '../src/portfolio/portfolio' 
function App() {
  const[loading,setLoading]= useState(true);
  useEffect(()=>{
    const timer =  setTimeout(() => {
      setLoading(false);
    }, 2000);

    return ()=> clearTimeout(timer);

  }, []);

  if(loading)
  {
    return <Loading/>
  }
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Portfolio />} />
      </Routes>
    </Router>
  )
}

export default App
