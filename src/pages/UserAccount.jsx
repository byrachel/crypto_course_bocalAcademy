import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import UserCard from "../components/User/UserCard";
import Login from "./Login";
import UserWallet from "../components/User/UserWallet";

export default function UserAccount() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user.user);

  const options = {
    method: "GET",
    headers: {
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/crypto-community/user",
        options
      );
      const data = await response.json();
      dispatch(setUser(data));
    };
    if (token) {
      getUser();
    }
  }, [token]);

  return (
    <>
      {user ? (
        <>
          <UserCard user={user} />
          <UserWallet />
        </>
      ) : (
        <Login />
      )}
    </>
  );
}
