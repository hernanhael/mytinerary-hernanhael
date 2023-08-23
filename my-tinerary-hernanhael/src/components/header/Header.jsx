import Navbar from "./navbar/Navbar";
import "./header.css";

export default function Header() {
  return (
    <header className="app-header">
      <div>
        <img
          src="/mytinerary-logo.png"
          alt="logo-myitinerary"
          className="header-logo"
        />
        <h1>MyTinerary</h1>
      </div>
      <Navbar />
    </header>
  );
}
