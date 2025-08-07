import React from "react";
import { useFetch } from "../hooks/useFetch";

const UserList = () => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          {user.id}. {user.name}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
