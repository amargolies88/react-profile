import React from 'react';
import Header from './components/Header';
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
