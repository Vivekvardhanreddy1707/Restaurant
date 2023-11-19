import { useState } from "react";
import CancelationForm from "./CancelationForm"; // Import your CancellationForm component
import Axios from "axios";

function CancelBooking() {
  const [arr, setArr] = useState([]);

  const getState = (childData) => {
    setArr(childData);
  };

  const handleCancelSubmit = () => {
    const data = {
      name: arr[0],
      email: arr[1],
      phoneNumber: arr[2],
      reason: arr[3], // Assuming reason for cancellation is in the fourth position of the array
    };

    Axios.post("http://localhost:4000/cancel-booking", data)
      .then((res) => {
        if (res.status === 200) {
          alert("Booking canceled successfully");
        } else {
          alert("Unexpected status code: " + res.status);
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("An error occurred while canceling the booking");
      });
  };

  return (
    <div className="bg-dark text-white" style={{ height: "94.3vh" }}>
      <form onSubmit={handleCancelSubmit}>
        <h1>Cancel Booking</h1>
        <CancelationForm getState={getState} />
      </form>
    </div>
  );
}

export default CancelBooking;
