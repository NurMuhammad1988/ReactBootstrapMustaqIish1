import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppHeader from './components/Header';
import AppHero from './components/Hero'
import AppAbout from './components/About';
import AppServices from './components/Services';
import AppWorks from './components/Works';
import AppTeams from './components/Teams';


function App() {

  return (

    <div className="App">

      <header>
        <AppHeader />
      </header>

      <main>
        <AppHero />
        <AppAbout />
        <AppServices />
        <AppWorks />
        <AppTeams />
      </main>



    </div>

  );



}

export default App;
