import React from "react";
import adminLayout from "../../hoc/adminLayout";
import axios from "axios";

class AddUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
    };

    this.handleEmailUpdate = this.handleEmailUpdate.bind(this);
    this.handlePasswordUpdate = this.handlePasswordUpdate.bind(this);
    this.handleNameUpdate = this.handleNameUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameUpdate(event) {
    this.setState({ name: event.target.value });
  }

  handleEmailUpdate(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordUpdate(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    const params = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post(process.env.REACT_APP_API_URL + "signup", params)
      .then((res) => {
        if (res.status === 200) {
          console.log("success");
          window.location.href = "/user";
        }
      })
      .catch((err) => {
        if (
          err.response.status === 401 ||
          err.response.status === 404 ||
          err.response.status === 403 ||
          err.response.status === 400
        ) {
          console.log(err.response.data.msg);
        }
        console.log("signup data submit error: ", err);
      });

    event.preventDefault();
  }

  render() {
    return (
      <>
        <div className="my-3 p-3 bg-body rounded shadow-sm">
          <h3 className="border-bottom pb-2 mb-0">Add New User</h3>
          <section id="forms">
            <article className="my-3" id="floating-labels">
              <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2"></div>
              <div>
                <div className="bd-example">
                  <>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Type Name"
                        onChange={this.handleNameUpdate}
                      />
                      <label htmlFor="floatingInput">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        onChange={this.handleEmailUpdate}
                      />
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        onChange={this.handlePasswordUpdate}
                      />
                      <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div style={{ marginTop: "10px" }}></div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary "
                        type="submit"
                        onClick={this.handleSubmit}
                      >
                        Create User
                      </button>
                    </div>
                  </>
                </div>
              </div>
            </article>
          </section>
        </div>
      </>
    );
  }
}

export default adminLayout(AddUser);
