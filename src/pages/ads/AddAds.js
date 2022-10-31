import React from "react";
import adminLayout from "../../hoc/adminLayout";
import axios from "axios";

class AddAds extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.handleEmailUpdate = this.handleEmailUpdate.bind(this);
    this.handlePasswordUpdate = this.handlePasswordUpdate.bind(this);
  }

  handleEmailUpdate(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordUpdate(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: ");
    axios
      .post(process.env.REACT_APP_API_URL + "getAllItems")
      .then((res) => {
        if (res.status === 200) {
          console.log("success");
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
          <h3 className="border-bottom pb-2 mb-0">Add New Ads</h3>
          <section id="forms">
            <article className="my-3" id="floating-labels">
              <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2"></div>
              <div>
                <div className="bd-example">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="disabledTextInput" className="form-label">
                        Building ID
                      </label>
                      <input
                        type="text"
                        id="disabledTextInput"
                        className="form-control"
                        placeholder="Type Building ID"
                      />
                    </div>

                    <div style={{ marginTop: "10px" }}></div>
                    <div className="mb-3">
                      <label htmlFor="disabledTextInput" className="form-label">
                        Floor
                      </label>
                      <input
                        type="text"
                        id="disabledTextInput"
                        className="form-control"
                        placeholder="Type Floor"
                      />
                    </div>

                    <div style={{ marginTop: "10px" }}></div>
                    <div className="mb-3">
                      <label htmlFor="disabledTextInput" className="form-label">
                        Texture
                      </label>
                      <input
                        type="text"
                        id="disabledTextInput"
                        className="form-control"
                        placeholder="Type Texture"
                      />
                    </div>

                    <div style={{ marginTop: "10px" }}></div>
                    <div className="mb-3">
                      <label htmlFor="disabledTextInput" className="form-label">
                        Owner
                      </label>
                      <input
                        type="text"
                        id="disabledTextInput"
                        className="form-control"
                        placeholder="Type Owner"
                      />
                    </div>

                    <div style={{ marginTop: "10px" }}></div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary "
                        type="submit"
                        onClick={() => {}}
                      >
                        Create AD
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </article>
          </section>
        </div>
      </>
    );
  }
}

export default adminLayout(AddAds);
