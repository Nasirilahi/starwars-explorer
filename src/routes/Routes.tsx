/** @jsxImportSource @emotion/react */
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ChunkLoader} from '../components/Loader';
import App from "../app/App";
const NotFound = lazy(() => import("../domains/NotFound"));
const PeopleList = lazy(
  () => import("../domains/PeopleList/PeopleListContainer")
);
const Planet = lazy(() => import("../domains/Planet/PlanetContainer"));
const Movies = lazy(() => import("../domains/Movies/MoviesContainer"));

const MainRoutes = (): JSX.Element => {
  return (
    <Router>
      <Suspense fallback={<ChunkLoader />}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<PeopleList />} />
            <Route path="/planet" element={<Planet />} />
            <Route path="/movies" element={<Movies />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default MainRoutes;
