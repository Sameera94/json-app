
import MainView from './components/MainView/MainView';
import ReactGA from "react-ga4";

const TRACKING_ID = "G-SBWLB6VF4T";
// const TRACKING_ID_LOCAL = "G-BW02165D68"

ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <MainView />
  );
}

export default App;
