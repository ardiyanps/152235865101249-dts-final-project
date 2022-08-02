import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from './themes/theme';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
