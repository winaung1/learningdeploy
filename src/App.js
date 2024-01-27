import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='px-6 text-4xl font-bold tracking-widest\'>
          We are going to deploy our website.
        </p>
        <ul className='py-10 text-yellow-400'>
          <li>Github</li>
          <li>Tailwind</li>
          <li>React</li>
          <li>Vercel/Netlify</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Are you ready like I am?
        </a>
      </header>
    </div>
  );
}

export default App;
