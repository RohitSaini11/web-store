import { useEffect, useState } from "react";
import {auth} from "../firebase/firebase";
import {onAuthStateChanged} from "firebase/auth";

const GetUser = () => {
  const [user, setUser] = useState();

  useEffect(() => {
      onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // console.log("Oh yes, Someone is here",user.uid);
        setUser(user);
        // ...
      } else {
        // User is signed out
        // ...
        setUser({});
        // console.log("Nada, nobody is here.");
      }
    });
  }, []);

  return user;
};

export default GetUser;
