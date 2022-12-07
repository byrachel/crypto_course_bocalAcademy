import { useState } from "react";
import { Button, Input, Spacer } from "@nextui-org/react";

export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  };

  const onSubmit = async () => {
    if (password && email) {
      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/crypto-community/login",
        options
      );
      const data = await response.json();
      console.log(data);
    }
  };

  return (
    <>
      <Input
        type="text"
        bordered
        color="default"
        labelPlaceholder="Identifiant (e-mail)"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Spacer y={1} />
      <Input.Password
        bordered
        color="default"
        labelPlaceholder="Mot de passe"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Spacer y={1} />
      <Button type="button" onPress={onSubmit}>
        Se connecter
      </Button>
    </>
  );
}
