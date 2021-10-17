import logo from './logo.svg';
import './App.css';

//Styles
import './styles/styles.css';
import './styles/normalize.css';




//Components
import Navbar from './components/Navbar';
import Headerplayer from './components/Headerplayer';

function App() {
  return (
  	<>
    	<Navbar />
    	<Headerplayer />
    </>
  );
}

export default App;
