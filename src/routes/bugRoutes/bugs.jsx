import { Link, Outlet } from "react-router-dom";

const bugs = [
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
];

for (const bug of bugs) {
  console.log(bug);
}
export default function Bugs() {
  return (
    <>
      <h3 className="subtitle">All Bugs</h3>
      <Link to={`/bugs/1`}>Random Bug</Link>
      <br />
      <Link to={`/bugs/new`}>ADD BUG</Link>

      <Outlet />
    </>
  );
}
