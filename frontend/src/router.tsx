import { createBrowserRouter } from "react-router";
import App from "./App";
import { CreateTodo, TodoDetails } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/create",
    Component: CreateTodo,
  },
  {
    path: "/notes/:id",
    Component: TodoDetails,
  },
]);

export default router;
