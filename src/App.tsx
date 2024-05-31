import "./App.css";
import MaintenancePage from "./pages/MaintenancePage";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
    const maintenance = false;

    return <>{maintenance ? <MaintenancePage /> : <PortfolioPage />}</>;
}

export default App;
