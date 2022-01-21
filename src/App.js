import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import LoginRegister from "./pages/LoginRegister";
import MyRoutines from "./pages/MyRoutines";
import Routines from "./pages/Routines";
import Activities from "./pages/Activities";
import Container from "./components/ui/Container";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";

import "./App.css";
import { userActions } from "./store/userSlice";
import Snackbar from "./components/ui/Snackbar";
import RoutinesByUser from "./pages/RoutinesByUser";
import RoutinesByActivity from "./pages/RoutinesByActivity";

function App() {
  const dispatch = useDispatch();

  //dispatch user from localStorage
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(userActions.fetchUserFromLocal());
  }, [dispatch]);
  return (
    <div className="App">
      <Snackbar />
      <Header />
      <Container>
        <Routes>
          <Route path="/routines" element={<Routines />} />
          {user && <Route path="/myroutines" element={<MyRoutines />} />}
          <Route
            path="/users/:username/routines"
            element={<RoutinesByUser />}
          />
          <Route
            path="/activities/:activityId/routines"
            element={<RoutinesByActivity />}
          />
          <Route path="/activities" element={<Activities />} />
          <Route path="/auth" element={<LoginRegister />} />
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
