import { lazy } from "react";

export const LazyHomePage = lazy(() => import("../pages/HomePage/HomePage"));
export const LazyApartmentPage = lazy(
  () => import("../pages/ApartmentPage/ApartmentPage"),
);
export const LazyNotFoundPage = lazy(
  () => import("../pages/NotFoundPage/NotFoundPage"),
);
