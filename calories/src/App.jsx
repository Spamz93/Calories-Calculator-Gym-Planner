import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <div className="app-container">
        <Header />
        <div className="layout">
          <Sidebar />
          <MainContent />
        </div>
        <Footer />
      </div>
  );
}

export default App;
