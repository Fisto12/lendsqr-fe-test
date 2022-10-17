import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserDetails from "./pages/UserDetails";
import Users from "./pages/Users";
function App() {
  const user = false;
  const client = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Routes>
          <Route path="/" element={user ? <HomePage /> : <LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/users" element={<Users Filters />} />
          <Route path="/dashboard" element={<Users />} />
          <Route path="/userDetails/:id" element={<UserDetails />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
