import React from "react";
import adminLayout from "../../hoc/adminLayout";
import axios from "axios";

class AddCharacter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      race: 0,
      gender: 0,
      class: 0,
    };

    this.handleEmailUpdate = this.handleEmailUpdate.bind(this);
    this.handlePasswordUpdate = this.handlePasswordUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailUpdate(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordUpdate(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    const params = {
      email: this.state.email,
      race: this.state.race,
      gender: this.state.gender,
      classe: this.state.class,
    };
    axios
      .post(process.env.REACT_APP_API_URL + "addCharacter", params)
      .then((res) => {
        if (res.status === 200) {
          window.location.href = "/character";
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
        console.log("login data submit error: ", err);
      });

    event.preventDefault();
  }

  render() {
    return (
      <>
        <div className="my-3 p-3 bg-body rounded shadow-sm">
          <h3 className="border-bottom pb-2 mb-0">Add New Character</h3>
          <section id="forms">
            <article className="my-3" id="floating-labels">
              <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2"></div>
              <div>
                <div className="bd-example">
                  <>
                    <div style={{ marginTop: "10px" }}></div>
                    <div className="mb-3">
                      <label htmlFor="disabledSelect" className="form-label">
                        Select Race
                      </label>
                      <select
                        id="disabledSelect"
                        className="form-select"
                        onChange={(e) => {
                          this.setState({ race: e.target.value });
                        }}
                      >
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                      </select>
                    </div>

                    <div style={{ marginTop: "10px" }}></div>
                    <div className="mb-3">
                      <label htmlFor="disabledSelect" className="form-label">
                        Select Class
                      </label>
                      <select
                        id="disabledSelect"
                        className="form-select"
                        onChange={(e) => {
                          this.setState({ class: e.target.value });
                        }}
                      >
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                      </select>
                    </div>

                    <div style={{ marginTop: "10px" }}></div>
                    <div className="mb-3">
                      <label htmlFor="disabledSelect" className="form-label">
                        Select Gender
                      </label>
                      <select
                        id="disabledSelect"
                        className="form-select"
                        onChange={(e) => {
                          this.setState({ gender: e.target.value });
                        }}
                      >
                        <option>0</option>
                        <option>1</option>
                      </select>
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
                    <div style={{ marginTop: "10px" }}></div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary "
                        type="submit"
                        onClick={this.handleSubmit}
                      >
                        Create Character
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

export default adminLayout(AddCharacter);
