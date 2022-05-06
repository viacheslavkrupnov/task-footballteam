import { lazy } from 'react';
import './App.css';
import Container from './components/Container';
import AppBar from './components/AppBar';
// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const HomePage = lazy(() =>
  import('./components/Views/HomePage' /* webpackChunkName: "HomePage" */),
);


function App() {
  return (
    <Container>
      <Router>
        <AppBar />
         <Routes>
          <Route exact path="/en/" element={<HomePage/>}/>

          </Routes>
        </Router>
    </Container>
  );
}

export default App;
