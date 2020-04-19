import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import About from './pages/About';
import Footer from './components/Footer';
import Page from './components/Page';
import './App.css';
import { PageProvider } from './utils/GlobalState';

function App() {
  console.log();
  return (
    <PageProvider>
      <div className="App">
        <Header />
        <Page />
        <Footer />
      </div>
    </PageProvider>
  );
}

export default App;
