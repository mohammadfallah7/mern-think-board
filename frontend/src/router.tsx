import { createBrowserRouter } from "react-router";
import App from "./App";
import CreateTodo from "./pages/create-todo";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/create",
    Component: CreateTodo,
  },
]);

export default router;
