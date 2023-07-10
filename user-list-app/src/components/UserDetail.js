import React, { useState, useEffect } from "react";
import axios from "axios";

const UserDetail = ({ activeUserId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${activeUserId}`).then(
      (res) => setUser(res.data)
    );
  }, [activeUserId]);
  return (
    <div>
      <h2>Detaylar</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default UserDetail;
