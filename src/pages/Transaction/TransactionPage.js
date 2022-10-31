import React, { useState, useEffect } from "react";
import adminLayout from "../../hoc/adminLayout";
import axios from "axios";

function TransactionPage() {
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
      .post(process.env.REACT_APP_API_URL + "getAllTransactions")
      .then((res) => {
        if (res.status === 200) {
          setItems(res.data.transactions);
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
            <h5 className="pb-4 mb-0">Get All Transaction Infomation</h5>
          </div>
        </div>

        <div className="d-flex text-muted">
          <table className="table">
            <thead>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Block Number</th>
                <th>Transaction Hash</th>
                <th>Transaction Index</th>
                <th>Type</th>
                <th>Block Hash</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr>
                  <td>{item.from}</td>
                  <td>{item.to}</td>
                  <td>{item.blockNumber}</td>
                  <td>{item.transactionHash}</td>
                  <td>{item.transactionIndex}</td>
                  <td>{item.type}</td>
                  <td>{item.blockHash}</td>
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

export default adminLayout(TransactionPage);
