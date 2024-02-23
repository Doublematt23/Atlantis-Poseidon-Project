import axios from "axios";
import { useEffect, useState } from "react";

const Alumni = () => {
  const [alumniArray, setAlumniArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://34.204.247.99/read.php");
        setAlumniArray(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main-content">
      <h2 className="center-heading">Alumni</h2>

      {alumniArray.map((alumni) => (
        <div className="program-section" key={alumni.id}>
          <img
            src={`data:image/jpeg;base64,${alumni.picture}`}
            style={{ height: "200px", width: "200px" }} // Set height and width to 200px
            alt={alumni.name}
          />
          <div className="alumni-details">
            <p>
              Name: {alumni.firstname} {alumni.lastname}
            </p>
            <p>Email: {alumni.email}</p>
            <p>Major: {alumni.major}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Alumni;
