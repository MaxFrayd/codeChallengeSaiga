import { createStore } from "redux";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => {
      setUsers(data);
    });
  }, [setUsers]);

  return (
    <div>
      { console.log(users)}
    </div>
  );
}
