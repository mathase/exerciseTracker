import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = (props) => {
  <td>
    <tr>{props.exercise.username}</tr>
    <tr>{props.exercise.description}</tr>
    <tr>{props.exercise.duration}</tr>
    <tr>{props.exercise.date.SubString(0, 10)}</tr>
    <tr>
      <Link />
    </tr>
  </td>;
};

class ExerciseList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);
    this.setState = { exercises: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/exercies/")
      .then((response) => {
        this.setState(response.data);
      })
      .catch((error) => console.log(error));
  }
  deleteExercise(id) {
    axios
      .delete("http://localhost:3000/exercise/" + id)
      .then((res) => console.log(res.data));
    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
    });
  }
  exerciseList() {
    return this.state.exercises.map((currentExercise) => {
      return (
        <Exercise
          exercise={currentExercise}
          deleteExercise={this.state.deleteExercise}
          key={currentExercise._id}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h4 className="text-center">Exercises logged</h4>
              <table className="table table-striped table-inverse table-responsive">
                <thead className="thead">
                  <tr>
                    <th>Username</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>{this.exerciseList}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExerciseList;
