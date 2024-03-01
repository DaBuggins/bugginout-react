import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/");
  };

  return (
    <>
      <h2>LOGIN</h2>
      <Form className="form">
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username </Form.Label>
          <Form.Control type="Username" placeholder="Enter Username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button
          onClick={() => {
            navigate("/");
          }}
          variant="primary"
          type="submit"
        >
          Login
        </Button>
      </Form>
    </>
  );
}

// export default function Login() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => console.log(data);
//   return (
//     <div id="register-card" className="row">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <label className="form-label" htmlFor="username">
//           Username
//         </label>
//         <input
//           className="form-control"
//           type="text"
//           id="username"
//           name="username"
//           required
//         />
//         FORM HERE
//       </form>
//     </div>
//   );
