import { Link, Outlet } from "react-router-dom";

export default function Users() {
  const user = "john";
  return (
    <div>
      <h3>Users</h3>
      <Link to={`/register`}>New Users</Link>
      <Link to={`/users/${user}/`}>Random User</Link>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
