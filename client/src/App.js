
import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from './layout';
import Home from './pages/Home';
import Staff from './pages/Staff';
import Documents from './pages/Documents';
import Boards from './pages/ProjectBoards';
import { WalletConnectProvider } from './walletprovider';
import '@solana/wallet-adapter-react-ui/styles.css'
import Dashboard from './pages/Dashboard';
import Teams from './pages/Teams';
import Myteams from './pages/Dashboard/myteams';
import Tasks from './pages/Dashboard/task';
import DevPage from './pages/DevPage';
import VideoCall from './pages/VideoConferencing';

function App() {
  return (
    <WalletConnectProvider>
    <div className="App">
    
    
     
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/company" element={ <Layout><Staff /></Layout>}  />
          <Route exact path="/documents" element={<Layout><Documents /></Layout>}  />
          <Route exact path="/boards" element={<Layout><Boards /></Layout>}  />
          <Route exact path="/dashboard" element={<Layout><Dashboard /></Layout>}  >
              <Route exact path="" element={<Tasks/>}  />
              <Route exact path="teams" element={<Myteams/>}  />
          </Route>
          <Route exact path="/teams" element={<Layout><Teams  /></Layout>}  />
          <Route exact path="/devs" element={<Layout><DevPage /></Layout>}  />
          <Route exact path="/videocall" element={<Layout><VideoCall /></Layout>}  />
        </Routes>
      
      
     
     
    </div>
    </WalletConnectProvider>
  );
}

export default App;
