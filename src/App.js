import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/NavBar";
import ExerciseTracker from './components/ExerciseTracker/ExerciseTracker'
import CreateExercise from "./components/CreateExercise/CreateExercise";
import CreateUser from "./components/CreateUser/CreateUser";
import EditExercise from "./components/EditExercise/EditExercise";
import ExerciseList from "./components/ExercisesList/ExercisesList";

function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/home" exact component={ExerciseTracker}/>
      <Route path="/" exact component={ExerciseList} />
      <Route path="/edit/:id" exact component={EditExercise} />
      <Route path="/create" exact component={CreateExercise} />
      <Route path="/user" exact component={CreateUser} />
    </Router>
  );
}

export default App;
