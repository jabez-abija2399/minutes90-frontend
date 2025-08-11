import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <nav className="p-4 bg-gray-800 text-white flex gap-4">
        <Link to="/">Feed</Link>
        <Link to="/login">Login</Link>
        <Link to="/admin">Admin</Link>
      </nav>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
