import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import { lazy } from 'react';
;

const Home = lazy(() => import('./../../pages/Home'));
const Movies = lazy(() => import('./../../pages/Movies'));
const MovieDetails = lazy(() => import('./../../pages/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const PageNotFound = lazy(() => import('../PageNotFound/PageNotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound/>}></Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
