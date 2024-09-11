import { RouterProvider, createBrowserRouter } from "react-router-dom";

export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      lazy: async () => {
        const { LandingRoute } = await import("./routes/landing");
        return { Component: LandingRoute };
      },
    },
    {
      path: "/test",
      lazy: async () => {
        const { TestingRoute } = await import("./routes/test");
        return { Component: TestingRoute };
      },
    },
  ]);

export const AppRouter = () => {
  const router = createAppRouter();

  return <RouterProvider router={router} />;
};
