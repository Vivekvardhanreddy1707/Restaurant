import { useState } from "react";
import Bookform from "./Bookform";
import Axios from "axios";
function BookTable() {
  const [arr, setArr] = useState([]);
  const getState = (childData) => {
    setArr(childData);
  };

  const handleSubmit = async () => {
    const data = {
      name: arr[0],
      email: arr[1],
      phone: arr[2],
      date: new Date(arr[3]),
      noOfPeople: arr[4],
    };
    Axios.post("http://localhost:4000/bookRoute/create-booking", data)
    .then((res)=>{
      if (res.status === 200) {
        alert("Record added successfully");
      } else {
        Promise.reject();
      }
    })
       .catch ((err)=>alert(err));
  }
  return (
    <form id="BookTabel" onSubmit={handleSubmit}>
      <Bookform getState={getState} />
    </form>
  );
}

export default BookTable;
