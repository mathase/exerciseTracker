import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      description: "",
      duration: Number,
      date: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/').then(response => {
      if(response.data.length > 0){
        this.setState({
          users: response.data.map(user => user.username),
          username: response.data[0].username
        })
      }
    })
    .catch((error) => console.log(error))
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
  onChangeDuration(e) {
    this.setState({
      duration: e.target.value,
    });
  }
  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', exercise).then(res=>{
      console.log(res);
      console.log(res.data);
    })
  }

  render() {
    return (
      <div>
        <div className="container text-center mt-3">
          <h1>You are on the create exercise component</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-5">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <select
                    ref="userInput"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                  >
                    {this.state.users.map(function (user) {
                      return (
                        <option key={user} value={user}>
                          {" "}
                          {user}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    placeholder="Description"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                  />
                </div>
                <div className="form-group">
                  <label>Duration</label>
                  <input
                    type="number"
                    className="form-control"
                    required
                    placeholder="Duration"
                    value={this.state.duration}
                    onChange={this.onChangeDuration}
                  />
                </div>
                <div className="form-group">
                  <label>Date</label> <br />
                  <DatePicker
                    className="form-control"
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                  />
                </div>
                <button
                  type="submit"
                  onClick={this.onSubmit}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateExercise;
