import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import SingleUser from "./singleuser";

interface Props {
  page: number;
  title: string;
}
const UserList: React.FC<Props> = ({ page, title }) => {
  const [users, setusers] = useState<any>([]);
  useEffect(() => {
    console.log("0. the new call");

    axios
      .get(
        `https://randomuser.me/api/?inc=id,name,gender,email&page=${page}&results=20`
      )
      .then((response) => {
        console.log("2. after data returned by the browser");
        console.log(response.data.results);
        setusers(response.data.results);
        console.log("3. after storing data returned from API");
      });
    console.log("1. after the API call");
  }, [page]);

  console.log("4. below the useEffect hook");

  return (
    <>
      {users.map((user: any) => (
        <SingleUser
          name={user.name.title + " " + user.name.first + " " + user.name.last}
          email={user.email}
          gender={user.gender}
        ></SingleUser>
      ))}
    </>
  );
};
export default memo(UserList);
