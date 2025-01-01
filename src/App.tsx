import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <main data-testid="app">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </main>
  );
}

export default App;
