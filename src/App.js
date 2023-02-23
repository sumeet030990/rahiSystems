import { useState } from "react";
import Users from "./component/users";
import CreateUser from "./component/users/create";

export default function App() {
  const [nameCollection, setNameCollection] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleSubmit = (values) => {
    setNameCollection([...nameCollection, values]);
  };

  return (
    <div className="App">
      <CreateUser
        handleSubmit={handleSubmit}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        setSelectedUserId={setSelectedUserId}
        selectedUserId={selectedUserId}
        nameCollection={nameCollection}
        setNameCollection={setNameCollection}
      />
      <Users
        nameCollection={nameCollection}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setSelectedUserId={setSelectedUserId}
      />
    </div>
  );
}
