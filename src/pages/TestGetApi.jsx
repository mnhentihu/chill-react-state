import { useEffect, useState } from "react";
import { getUsers } from "../services/api/apiUsers";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const data = await getUsers();
      setUsers(data);
      console.log(data);
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Daftar Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
