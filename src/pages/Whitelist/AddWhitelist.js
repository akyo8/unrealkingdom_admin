import React from "react";
import adminLayout from "../../hoc/adminLayout";
import axios from "axios";
import { Router } from "react-router";

class AddUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      wallet: "",
    };

    this.handleEmailUpdate = this.handleEmailUpdate.bind(this);
    this.handleWalletUpdate = this.handleWalletUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailUpdate(event) {
    this.setState({ email: event.target.value });
  }

  handleWalletUpdate(event) {
    this.setState({ wallet: event.target.value });
  }

  handleSubmit(event) {
    const params = { email: this.state.email, wallet: this.state.wallet };
    axios
      .post(process.env.REACT_APP_API_URL + "updatewhitelist", params)
      .then((res) => {
        if (res.status === 200) {
          window.location.href = "/whitelist";
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
        console.log("submit error: ", err);
      });

    event.preventDefault();
  }

  render() {
    return (
      <>
        <div className="my-3 p-3 bg-body rounded shadow-sm">
          <h3 className="border-bottom pb-2 mb-0">Add New Whitelist</h3>
          <section id="forms">
            <article className="my-3" id="floating-labels">
              <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2"></div>
              <div>
                <div className="bd-example">
                  <>
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
                        type="text"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="wallet"
                        onChange={this.handleWalletUpdate}
                      />
                      <label htmlFor="floatingPassword">
                        Wallet Information
                      </label>
                    </div>
                    <div style={{ marginTop: "10px" }}></div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary "
                        type="submit"
                        onClick={this.handleSubmit}
                      >
                        Add Whitelist
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
