import React from "react";

import OnlineUser from "../OnlineUser/OnlineUser";

const SideBar = ({ users }) => {
  return (
    <aside className="sidebar">
      <ul className="online-users-list">
        Members: {users.length}
        {users.map((user) => (
          <OnlineUser key={user.id} user={user.name} />
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
