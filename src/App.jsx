import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import api from "./api/axios";
import { Menu } from "lucide-react";

// Import components and pages
import { Sidebar } from "./components/Sidebar";
import { HomePage } from "./pages/HomePage";
import { DSAPage } from "./pages/DSAPage";
import { WebDevPage } from "./pages/WebDevPage";

import { MentorPage } from "./pages/MentorPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { ComingSoonPage } from "./pages/ComingSoonPage";
import { LoginPage } from "./pages/auth/LoginPage";
import { SignupPage } from "./pages/auth/SignupPage";
import { CheckEmailPage } from "./pages/auth/CheckEmailPage";
import { VerifyEmailPage } from "./pages/auth/VerifyEmailPage";

// Main Application Layout Component
const MainApp = ({ user, onLogout }) => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.classList.remove("animate-fade-in-up");
      void mainContent.offsetWidth;
      mainContent.classList.add("animate-fade-in-up");
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />;
      case "dsa":
        return <DSAPage />;
      case "web-dev":
        return <WebDevPage />;

      case "mentor":
        return <MentorPage />;
      case "resources":
        return <ResourcesPage />;
      case "community":
        return <ComingSoonPage title="Community" />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen font-sans text-white">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-gray-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <style>{`
            @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
            .animate-fade-in-up { animation: fadeInUp 0.5s ease-out forwards; }
          `}</style>

      <Sidebar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        onLogout={onLogout}
      />

      <main
        id="main-content"
        className="md:ml-64 p-4 sm:p-8 transition-all duration-300"
      >
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden fixed top-4 left-4 z-10 p-2 bg-gray-800/50 backdrop-blur-sm rounded-md text-white"
        >
          <Menu size={24} />
        </button>
        {renderPage()}
      </main>
    </div>
  );
};

// Auth Layout Component
const AuthApp = ({ onLoginSuccess }) => {
  const [authPage, setAuthPage] = useState("login"); // login, signup, checkEmail

  if (authPage === "login") {
    return (
      <LoginPage setAuthPage={setAuthPage} onLoginSuccess={onLoginSuccess} />
    );
  }
  if (authPage === "signup") {
    return (
      <SignupPage
        setAuthPage={setAuthPage}
        onSignupSuccess={() => setAuthPage("checkEmail")}
      />
    );
  }
  if (authPage === "checkEmail") {
    return <CheckEmailPage />;
  }
  return (
    <LoginPage setAuthPage={setAuthPage} onLoginSuccess={onLoginSuccess} />
  );
};

// Root App Component
export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const response = await api.get("/auth/me");
        setUser(response.data);
      } catch (error) {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    checkUserSession();
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-gray-900 min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route
          path="*"
          element={
            user ? (
              <MainApp user={user} onLogout={handleLogout} />
            ) : (
              <AuthApp onLoginSuccess={handleLoginSuccess} />
            )
          }
        />
      </Routes>
    </Router>
  );
}
