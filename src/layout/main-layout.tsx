import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import Hero from "@/pages/hero";
import { Toaster } from "react-hot-toast";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      {location.pathname === "/" && <Hero />}
      <div className="container py-8 min-h-screen">
        <Toaster />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
