import "../components/Email.css";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Email = () => {
  const notify = (text) => toast(text);
  const [email, setemail] = useState();

  const DB_SERVER_URL = "https://fxdx-email-server.onrender.com";

  async function WriteemailtoDB(fetched_email, useraddress) {

    if (fetched_email.length > 0) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: fetched_email, address: useraddress }),
      };

      fetch(`${DB_SERVER_URL}/api/add`, requestOptions)
        .then((response) => {
          if (!response.ok) {
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function wrritetoDBhelper() {
    const re = /\S+@\S+\.\S+/;
    let isvalidd = re.test(email);
    if(isvalidd){
      WriteemailtoDB(email,"0x");
      notify("email submitted");
      setemail("");
    }
    else{
        notify("Invalid Email");
    }

  }
  return (
    <div className="App-email-wrapper">
      <input
        className="email-input"
        type="email"
        placeholder="Join our Mailing list"
        value={email}
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />

      <button className="App-submit-btn" onClick={wrritetoDBhelper}>
        Submit
      </button>
      <ToastContainer 
      position="bottom-right"
      autoClose={2000}
      theme="dark"/>
    </div>
  );
};

export default Email;
