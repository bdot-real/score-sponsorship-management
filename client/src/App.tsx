import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/ui/theme-provider"
import { Toaster } from "./components/ui/toaster"
import { AuthProvider } from "./contexts/AuthContext"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Layout } from "./components/Layout"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { Dashboard } from "./pages/Dashboard"
import { Marketplace } from "./pages/Marketplace"
import { Contracts } from "./pages/Contracts"
import { Notifications } from "./pages/Notifications"
import { Settings } from "./pages/Settings"

function App() {
  return (
    <AuthProvider>
      <ThemeProvider defaultTheme="light" storageKey="ui-theme">
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
              <Route index element={<Dashboard />} />
              <Route path="marketplace" element={<Marketplace />} />
              <Route path="contracts" element={<Contracts />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
          <Toaster />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App