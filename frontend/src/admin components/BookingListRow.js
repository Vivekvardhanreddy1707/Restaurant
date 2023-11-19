import Axios from "axios";
function BookingListRow(props) {
  const { _id, name, email, phoneNumber, date, noOfPeople } = props.obj;

  const handleClick = () => {
    Axios.delete("http://localhost:4000/delete-booking/" + _id).then((res) => {
      if (res.status === 200) {
        alert("Record deleted");
        window.location.reload();
      } else Promise.reject();
    });
  };
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{date}</td>
      <td>{phoneNumber}</td>
      <td>{noOfPeople}</td>
      <td>
        <button class="btn btn-success">Edit</button>
        <button onClick={handleClick} class="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}
export default BookingListRow;
