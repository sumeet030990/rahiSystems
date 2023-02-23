const CreateUser = ({
  handleSubmit,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  selectedUserId,
  setSelectedUserId,
  nameCollection,
  setNameCollection
}) => {
  const handleSubmitClick = () => {
    if (selectedUserId !== null) {
      let usersData = [...nameCollection];
      let userData = { ...nameCollection[selectedUserId] };
      userData.firstName = firstName;
      userData.lastName = lastName;
      usersData[selectedUserId] = userData;
      setNameCollection(usersData);
      setSelectedUserId(null);
    } else {
      handleSubmit({ firstName, lastName });
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <button onClick={handleSubmitClick}>Submit</button>
    </>
  );
};

export default CreateUser;
