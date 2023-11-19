import { useState } from "react";
import BookingForm from "./Bookingform";
import Axios from "axios";

function CreateBooking() {
  const [arr, setArr] = useState([]);

  const getState = (childData) => {
    setArr(childData);
  };

  const handleSubmit = () => {
    const data = {
      name: arr[0],
      email: arr[1],
      phoneNumber: arr[2],
      date: new Date(arr[3]),
      noOfPeople: arr[4],
    };

    Axios.post("http://localhost:4000/create-booking", data)
      .then((res) => {
        if (res.status === 200) {
          alert("Booking succcessfull successfully");
        } else {
          alert("Unexpected status code: " + res.status);
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("An error occurred while submitting the form");
      });
  };

  return (
    <div className="bg-dark text-white" style={{ height: "94.3vh" }}>
      <form onSubmit={handleSubmit}>
        <h1>Book a Table</h1>
        <BookingForm getState={getState} />
      </form>
    </div>
  );
}

export default CreateBooking;