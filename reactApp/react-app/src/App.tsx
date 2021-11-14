import React from 'react';
import logo from './content/Watch_Later_Logo_Full.svg';
import LoginForm from './components/LogForm';
import './content/App.css';
import InviteToRegistration from './components/InviteToRegistration';

function App() {
  return (
    <main className="App">
        <div className="App_container">
            <img src={logo} alt="logo" className="app-logo" />

            <div className="form_container">
                <LoginForm />
            </div>

            <InviteToRegistration />

        </div>
    </main>

  );
}

export default App;
