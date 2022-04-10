import logo from './logo.svg'
import './App.css'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import { SimpleForm } from "./components/SimpleForm";
import { SimpleWizard } from "./components/SimpleWizard";
import React from 'react';

function App() {
  console.log(1);

  return (
    <div className="App">
      <header className="App-header">
        <React.StrictMode>
          <BrowserRouter>

            <p>Test `Form`</p>

            <Link to={"/"} >Simple form</Link>
            <Link to={"/wizard"} >Simple wizard</Link>

            <Routes>
              <Route path="/" element={<SimpleForm />} />
              <Route path="/wizard" element={<SimpleWizard />} />
            </Routes>

        </BrowserRouter>
      </React.StrictMode>
      </header>
    </div>
  )
}

export default App
