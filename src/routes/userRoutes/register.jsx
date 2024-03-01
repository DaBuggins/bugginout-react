import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Register() {
  return (
    <Col id="col">
      <Form id="register" className="form">
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username </Form.Label>
          <Form.Control type="Username" placeholder="Enter Username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-light">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label>Upload an Avatar Image</Form.Label>
          <Form.Control type="file" size="sm" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="I agree to the Terms & Conditions"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Col>
  );
}
// export default function Register() {
//   return (
//     <>
//       <div
//         id="register-card"
//         className="container d-flex justify-content-center align-items-center mt-5"
//       >
//         <div className="row">
//           <div className="col-md-6 offset-md-3 col-xl-4 offset-xl-4">
//             <div className="card shadow">
//               <img
//                 src="https://res.cloudinary.com/deskiol0z/image/upload/v1679138839/BugginOut/x0g8avsptzrmlxiv8jrf.jpg"
//                 alt=""
//                 className="card-img-top"
//               />
//               <div className="card-body">
//                 <h5 class="card-title">Register</h5>
//                 <form
//                   action="/register"
//                   method="POST"
//                   class="validated-form"
//                   novalidate
//                 >
//                   <div class="mb-3">
//                     <label class="form-label" for="username">
//                       Username
//                     </label>
//                     <input
//                       class="form-control"
//                       type="text"
//                       id="username"
//                       name="username"
//                       required
//                       autofocus
//                     />
//                     <div class="valid-feedback">Looks good!</div>
//                   </div>
//                   <div class="mb-3">
//                     <label class="form-label" for="email">
//                       Email
//                     </label>
//                     <input
//                       class="form-control"
//                       type="email"
//                       id="email"
//                       name="email"
//                       required
//                     />
//                     <div class="valid-feedback">Looks good!</div>
//                   </div>
//                   <div class="mb-3">
//                     <label class="form-label" for="password">
//                       Password
//                     </label>
//                     <input
//                       class="form-control"
//                       type="password"
//                       id="password"
//                       name="password"
//                       required
//                     />
//                     <div class="valid-feedback">Looks good!</div>
//                   </div>
//                   <button class="btn btn-success btn-block">Register</button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
