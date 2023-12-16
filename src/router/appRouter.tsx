import { Navigate, RouteObject, createHashRouter } from "react-router-dom";
import App from "../components/App/App";
import { Suspense } from "react";
import { LazyApartmentPage, LazyNotFoundPage } from "./lazyPages";
import Loader from "../components/Loader/Loader";
import HomePage from "../pages/HomePage/HomePage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/web" />,
      },
      {
        path: "/web",
        element: (
          <Suspense fallback={<Loader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/apartment/:apartmentId",
        element: (
          <Suspense fallback={<Loader />}>
            <LazyApartmentPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Loader />}>
            <LazyNotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createHashRouter(routes);

export default appRouter;
