import React, { useState, useEffect } from "react";
import adminLayout from "../../hoc/adminLayout";
import axios from "axios";
import { Link } from "react-router-dom";

function CharacterPage() {
  const [items, setItems] = useState([]);
  const classTexts = {
    0: "Warrior",
    1: "Ranger",
    2: "Marge",
    3: "Rouge",
    4: "Necromencer",
    5: "Druid",
    6: "Cleric",
    7: "Wizard",
    8: "Paladin",
    9: "Magician",
    10: "Shadow Knight",
    11: "Bard",
    12: "Sharman",
  };
  const raceTexts = { 0: "Dark Elf", 1: "Dwarf", 2: "Halfling", 3: "Human" };
  const genderTexts = { 0: "Male", 1: "Female" };
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
      .post(process.env.REACT_APP_API_URL + "getAllCharacters")
      .then((res) => {
        if (res.status === 200) {
          setItems(res.data.characters);
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

  const handleDeleteCharacter = (item) => {
    const reqParam = { characterid: item.uid };
    axios
      .post(process.env.REACT_APP_API_URL + "deleteCharacter", reqParam)
      .then((res) => {
        if (res.status === 200) {
          console.log("character removed");
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
        console.log("character remove error: ", err);
      });
  };
  return (
    <>
      <div className="table-container">
        <div className="row">
          <div className="col">
            <h5 className="pb-4 mb-0">Character Infomation</h5>
          </div>
          <div className="col text-right">
            <Link to="/addcharacter">
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
                <th>Race</th>
                <th>Gender</th>
                <th>Class</th>
                <th>Character Index</th>
                <th>User ID</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{raceTexts[item.race]}</td>
                  <td>{genderTexts[item.gender]}</td>
                  <td>{classTexts[item.classe]}</td>
                  <td>{item.cindex}</td>
                  <td>{item.userid}</td>
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
                            onClick={() => handleDeleteCharacter(item)}
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

export default adminLayout(CharacterPage);
