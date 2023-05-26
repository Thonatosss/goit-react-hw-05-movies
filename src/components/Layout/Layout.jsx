import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/movies'}>Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
