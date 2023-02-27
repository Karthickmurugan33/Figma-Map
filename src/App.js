
import './App.css';
import Nav from "../src/components/Nav"
import UserDetail from './components/UserDetail';
import Footer from './components/Footer';
import Map from './components/Map';

function App() {
  return (
    <div className="App">
      <Nav />
      <UserDetail />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
