import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import MainLayout from "./layout/MainLayout";
import { useSelector } from "react-redux";
import { useAuthContext } from "./hooks/useAuthContext";
import {
  Budgets,
  Login,
  Overview,
  Pots,
  RecurringBils,
  Signup,
  Transactions,
} from "./pages/index";

function App() {
  useAuthContext();

  const { user } = useSelector((store) => store.user);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        { index: true, element: <Overview /> },
        { path: "/budgets", element: <Budgets /> },
        { path: "/pots", element: <Pots /> },
        { path: "/recurringBills", element: <RecurringBils /> },
        { path: "/transactions", element: <Transactions /> },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <Signup />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
