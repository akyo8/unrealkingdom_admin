import React, { useState, useEffect } from "react";
import adminLayout from "../../hoc/adminLayout";
import { Link } from "react-router-dom";
import axios from "axios";

function UserPage() {
  const [items, setItems] = useState([]);

  if (
    localStorage.isAuthenticated &&
    JSON.parse(localStorage.isAuthenticated)
  ) {
    console.log("login first");
  } else {
    window.location.href = "/login";
  }

  useEffect(() => {
    axios
      .post(process.env.REACT_APP_API_URL + "getAllUsers")
      .then((res) => {
        if (res.status === 200) {
          setItems(res.data.users);
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
  }, []);

  const handleDeleteUser = (item) => {
    const reqParam = { userId: item.uid };
    axios
      .post(process.env.REACT_APP_API_URL + "deleteUser", reqParam)
      .then((res) => {
        if (res.status === 200) {
          console.log("user removed");
          window.location.reload();
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
        console.log("user remove error: ", err);
      });
  };

  return (
    <>
      <div className="table-container">
        <div className="row">
          <div className="col">
            <h5 className="pb-4 mb-0">User Infomation</h5>
          </div>

          <div className="col text-right">
            <Link to="/adduser">
              <button className="btn btn-default low-height-btn">
                <i className="fa fa-plus"></i>
              </button>
            </Link>
          </div>
        </div>

        <div className="d-flex text-muted">
          <table className="table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Last Login IP</th>
                <th>Created On</th>
                <th>Updated On</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>0.0.0.0</td>
                  <td>01-01-2022</td>
                  <td>01-01-2022</td>
                  <td>
                    <div className="dropdown table-action-dropdown">
                      <button
                        className="btn btn-secondary btn-sm dropdown-toggle"
                        type="button"
                        id="dropdownMenuButtonSM"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButtonSM"
                      >
                        <li>
                          <Link to="/character">
                            <a
                              className="dropdown-item"
                              href="#"
                              // onClick={() => handleOnCharacter(item)}
                            >
                              <i className="fa fa-user" aria-hidden="true"></i>
                              &nbsp;Characters
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/nft">
                            <a
                              className="dropdown-item"
                              href="#"
                              // onClick={() => handleOnNFT(item)}
                            >
                              <i
                                className="fa fa-dashboard"
                                aria-hidden="true"
                              ></i>
                              &nbsp;NFT
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/item">
                            <a
                              className="dropdown-item"
                              href="#"
                              // onClick={() => handleOnItem(item)}
                            >
                              <i
                                className="fa fa-text-width"
                                aria-hidden="true"
                              ></i>
                              &nbsp;Items
                            </a>
                          </Link>
                        </li>
                        <div className="dropdown-divider"></div>
                        <li>
                          <Link to="/adduser">
                            <a
                              className="dropdown-item"
                              href="#"
                              // onClick={() => handleOnItem(item)}
                            >
                              <i
                                className="fa fa-pencil"
                                aria-hidden="true"
                              ></i>
                              &nbsp;Add User
                            </a>
                          </Link>
                        </li>
                        <li>
                          <a
                            className="dropdown-item text-danger"
                            href="#"
                            onClick={() => handleDeleteUser(item)}
                          >
                            <i className="fa fa-trash" aria-hidden="true"></i>
                            &nbsp;Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <nav
          className="table-bottom-center-pagination"
          aria-label="Page navigation example "
        >
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default adminLayout(UserPage);
