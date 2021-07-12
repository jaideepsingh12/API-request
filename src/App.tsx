import React, { useState } from "react";

import UserList from "./UserList";

function App() {
  const [page, setPage] = useState(0);
  const [title, setTitle] = useState("favourite");
  console.log(page);

  return (
    <>
      <button
        className="px-5 py-2 bg-red-400"
        onClick={() => setPage(page + 1)}
      >
        next
      </button>
      <button
        className="px-5 py-2 ml-4 bg-red-400"
        onClick={() => setTitle("Not favourite")}
      >
        title switch
      </button>
      <UserList title={title} page={page}></UserList>
    </>
  );
}

export default App;
