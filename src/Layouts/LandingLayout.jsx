import { Outlet } from "react-router-dom";
import LandingNavbar from "../Components/LandingNavbar";
import Footer from "../Components/Footer";

function LandingLayout() {
  return (
    <div className="app-container">
      <LandingNavbar />
      <main className="container" style={{ marginTop: "80px" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default LandingLayout;
