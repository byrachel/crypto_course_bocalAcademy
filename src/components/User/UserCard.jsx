import { User } from "@nextui-org/react";

export default function UserCard({ user }) {
  return (
    <>
      <User
        src="https://cdn-icons-png.flaticon.com/512/147/147142.png"
        name={`${user.lastname.toUpperCase()} ${user.firstname}`}
        description={user.email}
      />
    </>
  );
}
