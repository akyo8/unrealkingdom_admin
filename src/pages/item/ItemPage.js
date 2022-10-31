import React, { useState, useEffect } from "react";
import adminLayout from "../../hoc/adminLayout";
import axios from "axios";
import { Link } from "react-router-dom";

function ItemPage() {
  const [items, setItems] = useState([]);

  if (
    localStorage.isAuthenticated &&
    JSON.parse(localStorage.isAuthenticated)
  ) {
    console.log("login first");
  } else {
    window.location.href = "/login";
  }

  const itemText = {
    0: "Axe",
    1: "Axe2",
    2: "Short Sword",
    3: "Spear",
    4: "Shield",
    5: "Hammer",
    6: "Long Sword",
    7: "Bow",
    8: "Dagger",
    9: "Omega Sword",
    10: "Rusty Dagger",
    11: "Rusty Sword",
    12: "Wood Staff",
    13: "Filmsy Bow",
    14: "Wom Shield",
    15: "Rust Mace",
    16: "Ripped Book",
    17: "Rusty Great Sword",
  };

  const typeText = {
    0: "Primary Weapon",
    1: "Secondary Weapon",
  };

  const specificText = {
    0: "Aex",
    1: "Sword",
    2: "Spear",
    3: "Shield",
    4: "Hammer",
    5: "Box",
    6: "Dagger",
    7: "Staff",
    8: "Other",
  };

  const equipmentText = {
    0: "One Handed",
    1: "Two Handed",
  };

  const handleDeleteItem = (item) => {
    const reqParam = { itemid: item.uid };
    alert(reqParam.itemid);
    axios
      .post(process.env.REACT_APP_API_URL + "deleteItem", reqParam)
      .then((res) => {
        if (res.status === 200) {
          console.log("item removed");
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
        console.log("item remove error: ", err);
      });
  };

  useEffect(() => {
    axios
      .post(process.env.REACT_APP_API_URL + "getAllItems")
      .then((res) => {
        if (res.status === 200) {
          setItems(res.data.items);
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
  return (
    <>
      <div className="table-container">
        <div className="row">
          <div className="col">
            <h5 className="pb-4 mb-0">Item Infomation</h5>
          </div>
          <div className="col text-right">
            <Link to="/additem">
              <button className="btn btn-default low-height-btn">
                <i className="fa fa-plus"></i>
              </button>
            </Link>
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
                <th>User</th>
                <th>Item ID</th>
                <th>Item Type</th>
                <th>Specific Type</th>
                <th>Equipment Type</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{item.user}</td>
                  <td>{itemText[item.itemid]}</td>
                  <td>{typeText[item.itemtype]}</td>
                  <td>{specificText[item.specifictype]}</td>
                  <td>{equipmentText[item.equipmenttype]}</td>
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
                          <a
                            className="dropdown-item text-danger"
                            href="#"
                            onClick={() => handleDeleteItem(item)}
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

export default adminLayout(ItemPage);
