import React from "react";
import DatePick from "./DatePicker";
import "./Allnotification.css";
import sqr from "./images/sqr.png";
import { Link } from "react-router-dom";
import back from "./images/back.png";
import IconCalender from "./images/Icon-calendar.png";
import ssqr from "./images/ssqr.png";
import path from "./images/Path.png";
export default function Allnotification() {
  return (
    <div className="clr">
      <div className="sf3">
        <Link to="/SendNotification">
          <img src={back}></img>
        </Link>
        <h2 style={{ marginLeft: "20px" }}>All Notification</h2>
      </div>
      <div className="sf2">
        <div className="cola">
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: "20px 0",
            }}
          >
            <h3>All Notification</h3>
            <div className="Date">
              <img src={IconCalender} alt="Icon" />
              <DatePick />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <p>12 Jan 2022</p>
            <img src={ssqr}></img>
            <div style={{ marginLeft: "13px" }}>
              <h3>Heading</h3>
              <p
                style={{
                  textAlign: "left",
                  letterSpacing: "0.28px",
                  fontSize: "14px",
                }}
              >
                simply dummy text of the printing & type setting industry. Lorem
                Ipsum has been...
              </p>
            </div>
            <img src={path}></img>
          </div>
          <hr />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <p>12 Jan 2022</p>
            <img src={ssqr}></img>
            <div style={{ marginLeft: "13px" }}>
              <h3>Heading</h3>
              <p
                style={{
                  textAlign: "left",
                  letterSpacing: "0.28px",
                  fontSize: "14px",
                }}
              >
                simply dummy text of the printing & type setting industry. Lorem
                Ipsum has been...
              </p>
            </div>
            <img src={path}></img>
          </div>
          <hr />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <p>12 Jan 2022</p>
            <img src={ssqr}></img>
            <div style={{ marginLeft: "13px" }}>
              <h3>Heading</h3>
              <p
                style={{
                  textAlign: "left",
                  letterSpacing: "0.28px",
                  fontSize: "14px",
                }}
              >
                simply dummy text of the printing & type setting industry. Lorem
                Ipsum has been...
              </p>
            </div>
            <img src={path}></img>
          </div>
          <hr />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <p>12 Jan 2022</p>
            <img src={ssqr}></img>
            <div style={{ marginLeft: "13px" }}>
              <h3>Heading</h3>
              <p
                style={{
                  textAlign: "left",
                  letterSpacing: "0.28px",
                  fontSize: "14px",
                }}
              >
                simply dummy text of the printing & type setting industry. Lorem
                Ipsum has been...
              </p>
            </div>
            <img src={path}></img>
          </div>
          <hr />
        </div>
        <div className="col3"></div>
        <div className="colb">
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: "20px 0",
            }}
          >
            <p>12 Jan 2022</p>
            <button className="btna">Delete</button>
          </div>
          <img src={sqr}></img>
          <p>
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown
          </p>
        </div>
      </div>
    </div>
  );
}
