import moment from "moment";
import "../style.css";

const Location = () => {
  const now = moment();
  const formattedTime = now.format("HH:mm");
  const formattedDate = now.format("dddd, D MMMM");

  return (
    <div className="card location">
      <h2>Noida</h2>
      <h1>{formattedTime}</h1>
      <p>{formattedDate}</p>
    </div>
  );
};

export default Location;
