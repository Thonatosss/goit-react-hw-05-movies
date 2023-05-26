import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavigationLink } from './Layout.styled';

export default function Layout() {
  return (
    <div>
      <Header>
        <nav>
          <NavigationLink to={'/'}>Home</NavigationLink>
          <NavigationLink to={'/movies'}>Movies</NavigationLink>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
