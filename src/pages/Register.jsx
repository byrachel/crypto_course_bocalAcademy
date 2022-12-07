import { useState } from "react";
import { Input, Button, Spacer } from "@nextui-org/react";

export default function Register() {
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    }),
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://social-network-api.osc-fr1.scalingo.io/crypto-community/register",
      options
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        type="text"
        bordered
        color="default"
        labelPlaceholder="Prénom"
        onChange={(e) => setFirstname(e.target.value)}
      />
      <Spacer y={1} />
      <Input
        type="text"
        bordered
        color="default"
        labelPlaceholder="Nom"
        onChange={(e) => setLastname(e.target.value)}
      />
      <Spacer y={1} />
      <Input
        type="text"
        bordered
        color="default"
        labelPlaceholder="e-mail"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Spacer y={1} />
      <Input
        type="text"
        bordered
        color="default"
        labelPlaceholder="Mot de passe"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Spacer y={1} />
      <Button type="submit" onPress={onSubmit}>
        S'enregistrer
      </Button>
    </form>
  );
}
