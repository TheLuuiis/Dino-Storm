import './css/globals.css';
import Header from './components/Header';
import Welcome from './components/Welcome';


function App() {

  return (
    <div className="app">
      <Header />
      <main className='container__main'>
        <Welcome />
      </main>
    </div>
  )
}

export default App;
