import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Routine from "../components/Routine";

import { getUserRoutinesAct } from "../store/dataActions";
import classes from "./Routines.module.css";

const RoutinesByUser = (props) => {
  const { username } = useParams();
  const dispatch = useDispatch();
  const userRoutines = useSelector((state) => state.data.userRoutines);

  useEffect(() => {
    dispatch(getUserRoutinesAct(username));
  }, [dispatch, username]);

  return (
    <section className={classes.routinespage}>
      <h1>Routines by {username}</h1>
      <ul>
        {userRoutines.map((routine) => {
          return <Routine key={routine.id} routine={routine} />;
        })}
      </ul>
    </section>
  );
};

export default RoutinesByUser;
