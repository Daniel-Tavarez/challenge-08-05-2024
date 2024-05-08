import { QueryClient, QueryClientProvider } from "react-query";
import "./App.scss";
import HomePage from "./pages/HomePage";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <HomePage/>
    </QueryClientProvider>
  );
}

export default App;
