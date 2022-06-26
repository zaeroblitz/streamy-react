import React, { Fragment, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

const GoogleAuth = ({ signIn, signOut, isSignedIn }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id:
        "1048309983851-0835megp6d1chpe2ek2j2av9dvbactmp.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {
        theme: "outline",
      }
    );

    console.log(user);
  });

  const handleCallbackResponse = (response) => {
    let userObj = jwtDecode(response.credential);
    setUser(userObj);
    signIn();

    document.getElementById("signInDiv").hidden = true;
  };

  const handleSignOut = (event) => {
    event.preventDefault();
    setUser({});
    signOut();
    document.getElementById("signInDiv").hidden = false;
  };

  return (
    <div>
      <div id="signInDiv"></div>
      {isSignedIn && (
        <Fragment>
          <img
            src={user.picture}
            alt="user_picture"
            className="w-12 h-12 object-cover rounded-full"
          />
          <button
            className="btn btn-error text-white"
            onClick={(event) => handleSignOut(event)}
          >
            Sign Out
          </button>
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
