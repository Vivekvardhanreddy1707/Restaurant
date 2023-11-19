import { useState } from "react";

function CancelationForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [reason, setReason] = useState("");

  const arr = [name, email, phoneNumber, reason];

  const handleClick = () => {
    props.getState(arr);
  };

  return (
    <div className="container" style={{ maxWidth: "40%", margin: "0px auto" }}>
      <div className="form-group">
        <label htmlFor="name" className="text-white">Your Name:</label>
        <input
          onChange={(event) => setName(event.target.value)}
          id="name"
          className="form-control mb-2 text-white bg-dark"
          type="text"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="text-white">Your Email:</label>
        <input
          onChange={(event) => setEmail(event.target.value)}
          id="email"
          className="form-control mb-2 text-white bg-dark"
          type="text"
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber" className="text-white">Your Phone Number:</label>
        <input
          onChange={(event) => setPhone(event.target.value)}
          id="phoneNumber"
          className="form-control mb-2 text-white bg-dark"
          type="number"
        />
      </div>
      <div className="form-group">
        <label htmlFor="reason" className="text-white">Reason for Cancellation:</label>
        <input
          onChange={(event) => setReason(event.target.value)}
          id="reason"
          className="form-control mb-2 text-white bg-dark"
          type="text"
        />
      </div>
      <button
        onClick={handleClick}
        className="btn btn-danger my-3 d-block mx-auto"
        type="submit"
      >
        Cancel Reservation
      </button>
    </div>
  );
}

export default CancelationForm;
