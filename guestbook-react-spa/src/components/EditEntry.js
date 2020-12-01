import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

function EditEntry() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  let { id } = useParams();
  let history = useHistory();
  useEffect(() => {
    axios.get(`http://localhost:8080/${id}`).then((res) => {
      setName(res.data.name);
      setMessage(res.data.message);
    });
  }, []);
  const onSubmit = function (e) {
    e.preventDefault();
    axios
      .patch(`http://localhost:8080/${id}`, {
        name,
        message,
      })
      .then(() => history.push("/"));
  };
  return (
    <form onSubmit={onSubmit}>
      Name:{" "}
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      Message:{" "}
      <textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>{" "}
      <br />
      <button>Save</button>
    </form>
  );
}

export default EditEntry;
