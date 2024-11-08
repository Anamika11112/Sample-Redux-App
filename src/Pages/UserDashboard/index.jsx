import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/User/userActions";
import "./index.css";
function UserDashboard() {
  const { error, loading, users } = useSelector((store) => store.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div className="userPage_Container">
      <ul>
        {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}
export default UserDashboard;
