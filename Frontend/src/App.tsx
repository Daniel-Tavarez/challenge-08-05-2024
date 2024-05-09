import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom"; // Use BrowserRouter
import "./App.scss";
import AppRoutes from "./routing/router";

function App() {
  const queryClient = new QueryClient();

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </Router>
  );
}

export default App;