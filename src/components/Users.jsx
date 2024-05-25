"use client";
import { AuthContext } from "@/Providers/AuthProvider";
import { getAllUser } from "@/utils/getAllUser";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
 
  const { user } = useContext(AuthContext);
  const router = useRouter()
  if(!user){
    router.push('/login')
  }
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getAllUser();
        setUsers(users);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr className="">
              <th>S.N.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="">
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td >{user.rules}</td>
                <td className="text-center">
                  <button className="btn btn-md btn-active btn-primary">
                    Edit
                  </button>
                  <button className="btn btn-active btn-secondary">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
