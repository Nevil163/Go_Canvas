import { Button, SelectChangeEvent, TextField } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import { johnsmithside } from "../../assets/images";

function AccountPage() {
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [textState, setTextState] = React.useState("Off");
  const toggleText = () => {
    setTextState((state) => (state === "On" ? "Off" : "On"));
};
  const handleChange2 = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const [date, setDate] = React.useState<Date | null>(null);
  return (
    <>
      <Helmet>
        <title>Profile | Go-Canvas</title>
      </Helmet>
      {/* Innerpage-Start */}
      <div className="wrapper">
        <div
          className="overlay"
          onClick={(e) => document.body.classList.toggle("sidebar-open")}
        ></div>
        <div
          className="search-overlay"
          onClick={(e) => document.body.classList.toggle("search-open")}
        ></div>
        <Header></Header>
        <div className="main-background"></div>
        <main className="dashnoard-content">
          <div className="sidebar">
            <Sidebar></Sidebar>
          </div>
          <div className="main-content">
            <div className="main-title">
              <h5>Profile</h5>
              <h6>Go-Canvas</h6>
            </div>
            <div className="innerpage-table table">
              <div className="card">
                <div className="profile">
                  <div className="profile-img">
                    <img src={johnsmithside} alt="john-smith" />
                  </div>
                  <h6>John Smith</h6>
                </div>
                <div style={{ right: "10px", position: "absolute" }}>
                  <Button variant="contained" onClick={toggleText} >{textState == 'Off' ? 'Edit' : 'Cancel'}</Button>
                </div>
                {(textState == 'On') ?
                <div>
                  <TextField
                    id="standard-basic"
                    label="First Name"
                    variant="standard"
                  />
                  <TextField
                    id="standard-basic"
                    label="Last Name"
                    variant="standard"
                  />
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button variant="contained">Save Changes</Button>
                  </div>
                </div>
                : 
                <div>
                  First Name <br />
                  Last Name
                </div>
                }
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* Innerpage-End */}
    </>
  );
}
export default AccountPage;
