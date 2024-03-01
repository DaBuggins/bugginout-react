import { Link, Outlet } from "react-router-dom";

const user1 = {
  name: "john",
  location: "London",
  bugs: [
    {
      name: "ant",
      location: "moon",
      description: "just a great lil guy",
      sciName: "bloobus maximus",
      id: 1,
    },
    {
      name: "fly",
      location: "mud",
      description: "just a great lil fly",
      sciName: "bloobus flyus",
      id: 2,
    },
  ],
};

export default function ShowUser() {
  return (
    <>
      <h1>Show User Page</h1>
      <section className="user-card">
        {user1.name} from {user1.location}
      </section>
      <p>{user1.bugs.forEach((bug) => {})}</p>

      <Link to={`/users/1/edit`}>Edit Bug</Link>
      <Outlet />
    </>
  );
}
