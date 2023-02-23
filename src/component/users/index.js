const Users = ({
  nameCollection,
  setFirstName,
  setLastName,
  setSelectedUserId
}) => {
  const handleEditClick = (userData) => {
    setSelectedUserId(userData.index);
    setFirstName(userData.firstName);
    setLastName(userData.lastName);
  };
  const usersData = nameCollection.map((data, index) => {
    return (
      <tr>
        <td>{data.firstName}</td>
        <td>{data.lastName}</td>
        <td>
          <button
            onClick={() =>
              handleEditClick({
                index,
                firstName: data.firstName,
                lastName: data.lastName
              })
            }
          >
            Edit
          </button>
        </td>
      </tr>
    );
  });
  return (
    <>
      <h1>Users Table </h1>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Action</th>
        </tr>
        {usersData}
      </table>
    </>
  );
};

export default Users;
