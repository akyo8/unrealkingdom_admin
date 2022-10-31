import React, { useState } from "react";
import adminLayout from "../../hoc/adminLayout";
import axios from "axios";

function ServerStatusPage() {
  if (
    localStorage.isAuthenticated &&
    JSON.parse(localStorage.isAuthenticated)
  ) {
    console.log("login first");
  } else {
    window.location.href = "/login";
  }

  return (
    <>
      <div className="table-container">
        <div className="row">
          <div className="col">
            <h5 className="pb-4 mb-0">Game Server Infomation</h5>
          </div>
          <div className="col text-right">
            <button className="btn btn-default low-height-btn">
              <i className="fa fa-plus"></i>
            </button>
          </div>
          <p></p>
        </div>

        <div className="d-flex text-muted">
          <table className="table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Server Name</th>
                <th>Server IP</th>
                <th>Location</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Test Server</td>
                <td>100.100.100.100</td>
                <td>United States</td>
                <td>Running</td>
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
                      <div className="dropdown-divider"></div>
                      <li>
                        <a className="dropdown-item text-danger" href="#">
                          <i className="fa fa-trash" aria-hidden="true"></i>
                          &nbsp;Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
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

export default adminLayout(ServerStatusPage);
