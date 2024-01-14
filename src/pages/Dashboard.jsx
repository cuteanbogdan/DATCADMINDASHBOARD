import React, { useState, useEffect } from "react";
import UserTable from "../components/DashboardComponents/UsersTable";
import toastifyOptions from "../utils/toastifyOptions";
import { toast } from "react-toastify";
import { Toast } from "../utils/toastUtil";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://backenddatc11.azurewebsites.net/api/dashboard/users",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();

      if (!response.ok) {
        toast.error(data.msg, toastifyOptions);
      }
      setUsers(data);
    } catch (err) {
      toast.error(err, toastifyOptions);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [token]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Dashboard</h1>
      <Toast />
      {loading && <div>Loading users...</div>}
      {!loading && <UserTable users={users} fetchUsers={fetchUsers} />}
    </div>
  );
};

export default Dashboard;
