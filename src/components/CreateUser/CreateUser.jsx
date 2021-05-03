import React, { Component } from "react";
import axios from "axios";

class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
    };
  }

  onChangeUsername(e) {
    this.setState({ username: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
    };

    console.log(user);

    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data));

    this.setState({
      username: "",
    });
  }
  render() {
    return (
      <div>
        <div className="container text-center mt-5">
          {" "}
          <h1>You are on the create user list component</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-5 m-auto">
              <form onSubmit={this.onSubmit}>
                <div className="form-group mt-5">
                  <label>Username</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                  />
                </div>
              </form>
              <button
                placeholder="Create User"
                type="submit"
                className="btn btn-primary m-auto"
                onClick={this.onSubmit}
              >Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUser;
