import { useState } from "react";
import { Button, Grid, Input, Spacer } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { setToken } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      dispatch(setToken(data.token));
      navigate("/user");
    }
  };

  return (
    <>
      <Grid.Container gap={2} justify="center">
        <Grid>
          <Input
            type="text"
            bordered
            color="default"
            placeholder="Identifiant (e-mail)"
            aria-label="e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid>
          <Input.Password
            bordered
            color="default"
            placeholder="Mot de passe"
            aria-label="mot de passe"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid>
          <Button type="button" bordered color="primary" onPress={onSubmit}>
            Se connecter
          </Button>
        </Grid>
      </Grid.Container>
    </>
  );
}
