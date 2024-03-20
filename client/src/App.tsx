import { Suspense } from "react";
import AppRoutes from "./router/AppRoutes";
import NavBar from "./components/shared/NavBar";
import Loader from "./components/shared/Loader";

function App() {
  const extraMenuItems: NavBarItem[] = [];

  return (
    <>
      <NavBar extraItems={extraMenuItems} />
      <Suspense fallback={<Loader />}>
        <AppRoutes />
      </Suspense>
    </>
  );
}

export default App;
