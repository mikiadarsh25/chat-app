const users = [];
//  addUser, removeUser, getUser, getUsersInRoom

const addUser = ({ id, username, room }) => {
  // Clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Validate the data
  if (!username || !room) {
    return { error: "Username and Room required!" };
  }
  // Check the existing data
  const existingUser = users.find((user) => {
    return user.username === username && user.room === room;
  });
  if (existingUser) {
    return { error: "Username in use!" };
  }
  // Store the data
  const user = { id, username, room };
  users.push(user);
  return { user };
};
addUser({ id: 22, username: "adarsh", room: "saharsa" });

const removeUser = (id) => {
  // find user's index
  const index = users.findIndex((user) => user.id === id);
  // validate index
  if (index !== 1) {
    // Remove user
    return users.splice(index, 1)[0];
  }
};
const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
  room = room.trim().toLowerCase();
  return users.filter((user) => user.room === room);
};

module.exports = { addUser, removeUser, getUser, getUsersInRoom };


