import React from "react";
import "./Sendnotification.css";
import pic from "./images/Group 5124.png";
import img from "./images/Rectangle 183.png";
import search from "./images/search.png";
import { Link } from "react-router-dom";
export default function Sendnotification() {
  return (
    <div className="clr">
      <div className="sf">
        <h2>Send Notification</h2>
        <button className="btn1">
          <Link
            to="/SendNotification/AllNotification"
            style={{ textDecoration: "none", color: "white" }}
          >
            View All Notifications
          </Link>
        </button>
      </div>
      <div className="sf2">
        <div className="col1">
          <img src={pic}></img>
          <button className="bt2" type="file">
            Click to Upload
          </button>{" "}
          <h4>Notification Message</h4>
          <textarea
            rows={5}
            cols={65}
            placeholder={" Write Something.."}
          ></textarea>{" "}
          <div className="dival">
            <button className="btn2">Send</button>
          </div>{" "}
        </div>
        <div className="col3"></div>
        <div className="col2">
          <div className="search1">
            <h2>Select User</h2>{" "}
            <div className="box">
              <img className="lens" src={search}></img>{" "}
              <input
                style={{
                  textAlign: "center",
                  border: "none",
                  borderRadius: "15px",
                  height: "43px",
                  "&:focus": { border: "none" },
                }}
                placeholder="Search User"
              ></input>
            </div>
          </div>
          <div className="topping">
            <input type="checkbox" />
            <img className="shane" src={img}></img>
            <p className="par1">Shane Wagner</p>
          </div>
          <hr />
          <div className="topping">
            <input type="checkbox" />
            <img className="shane" src={img}></img>
            <p className="par1">Shane Wagner</p>
          </div>
          <hr />
          <div className="topping">
            <input type="checkbox" />
            <img className="shane" src={img}></img>
            <p className="par1">Shane Wagner</p>
          </div>
          <hr />
          <div className="topping">
            <input type="checkbox" />
            <img className="shane" src={img}></img>
            <p className="par1">Shane Wagner</p>
          </div>
          <hr />
          <div className="topping">
            <input type="checkbox" />
            <img className="shane" src={img}></img>
            <p className="par1">Shane Wagner</p>
          </div>
          <hr />
          <div className="topping">
            <input type="checkbox" />
            <img className="shane" src={img}></img>
            <p className="par1">Shane Wagner</p>
          </div>
        </div>
      </div>
    </div>
  );
}
