import { Link, Outlet } from "react-router-dom";

const bug = {
  name: "ant",
  location: "moon",
  description: "just a great lil guy",
  sciName: "bloobus maximus",
  image:
    "https://res.cloudinary.com/deskiol0z/image/upload/v1679138839/BugginOut/x0g8avsptzrmlxiv8jrf.jpg",
  id: 1,
};

export default function ShowBug() {
  return (
    <>
      <div>
        <h1> Common Name: {bug.name} </h1>

        <h2> Location Found: {bug.location} </h2>
        <img className="show-image" src={bug.image} alt="" />
        <h2> Scientific Name: {bug.sciName} </h2>
        <h2> Comment: {bug.description} </h2>
      </div>
      <Outlet />
      <Link className="btn btn-info" to={`/bugs/1/edit`}>
        Edit Bug
      </Link>
      <br />
      <button className="btn btn-danger">Delete</button>
    </>
  );
}
