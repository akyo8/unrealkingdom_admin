import React, { useState, useEffect } from "react";
import adminLayout from "../../hoc/adminLayout";
import axios from "axios";
import { Link } from "react-router-dom";

function NftPage() {
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
      .post(process.env.REACT_APP_API_URL + "getAllMints")
      .then((res) => {
        if (res.status === 200) {
          setItems(res.data.nfts);
          console.log(res.data);
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
        console.log("error: ", err);
      });
  }, []);
  return (
    <>
      <div className="table-container">
        <div className="row">
          <div className="col">
            <h5 className="pb-4 mb-0">All Minted NFT Infomation</h5>
          </div>
        </div>

        <div className="d-flex text-muted">
          <table className="table">
            <thead>
              <tr>
                <th>NFT Address</th>
                <th>Token ID</th>
                <th>Price</th>
                <th>Market Fee</th>
                <th>Name</th>
                <th>Description</th>
                <th>Token URI</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr>
                  <td>{item.nftAddress}</td>
                  <td>{item.tokenId}</td>
                  <td>{item.price}</td>
                  <td>{item.marketFees}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.tokenURI}</td>
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

export default adminLayout(NftPage);
