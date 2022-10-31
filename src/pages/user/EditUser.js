import React from "react";
import adminLayout from "../../hoc/adminLayout";

class EditUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="my-3 p-3 bg-body rounded shadow-sm">
          <h3 className="border-bottom pb-2 mb-0">Edit User Information</h3>
          <section id="forms">
            <article className="my-3" id="floating-labels">
              <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2"></div>
              <div>
                <div className="bd-example">
                  <form>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="col-12">
                      <button className="btn btn-primary " type="submit">
                        Submit form
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

export default adminLayout(EditUser);
