
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

function App() {
  return (
    <div className="App">
      <WalletConnectProvider>
      <Layout>
     
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/company" element={<Staff />}  />
          <Route exact path="/documents" element={<Documents />}  />
          <Route exact path="/boards" element={<Boards />}  />
          <Route exact path="/dashboards" element={<Dashboard />}  >
              <Route exact path="" element={<Tasks/>}  />
              <Route exact path="teams" element={<Myteams/>}  />
          </Route>
          <Route exact path="/teams" element={<Teams  />}  />
          <Route exact path="/devs" element={<DevPage />}  />
        </Routes>
      
      </Layout>
      </WalletConnectProvider>
     
    </div>
  );
}

export default App;
