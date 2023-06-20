import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>React Explained</h1>
          <div>
            <NavLink to="/">Usage</NavLink>
            <NavLink to="interactivity">Interactivity</NavLink>
            <NavLink to="community">Community</NavLink>
            <NavLink to="download">Download</NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
