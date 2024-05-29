import React, { useState, useEffect } from "react";
import axios from "axios";
import { Balance } from "../Components/Balance";
import { Appbar } from "../Components/Appbar";
import { Userlist } from "../Components/Userlist";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const [balance, setBalance] = useState(0);
  const [error, setError] = useState(null);
  const [access, setAccess] = useState(true);//it should be false but for testing we make it true
  const navigate = useNavigate();

  useEffect(() => {
    console.log("fetching balance");
    fetchBalance();
  }, [balance]); // Run only once on initial render

  async function fetchBalance() {
    try {
      const token = localStorage.getItem('authorization');
      const response = await axios.get('http://localhost:3000/api/v1/account/balance', {
        headers: {
          Authorization: token
        }
      });
      setBalance(response.data.balance);
      setAccess(true);
    } catch (error) {
      setError(error.response?.data?.msg || "An error occurred while fetching balance.");
      setAccess(false);
    }
  }

  useEffect(() => {
    if (!access) {
      alert("You don't have access to the dashboard page. Redirecting you to the login page.");
      navigate('/');
    }
  }, [access, navigate]);

  return (
    <>
      {access ? (
        error ? (
          <h2 className="text-red-800">{error}</h2>
        ) : (
          <div>
            <Appbar />
            <Balance balance={balance} />
            <Userlist />
          </div>
        )
      ) : null}
    </>
  );
}
