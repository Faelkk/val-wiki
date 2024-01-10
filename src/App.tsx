import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./Router/Router";
import "./index.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
