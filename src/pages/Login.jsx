import { useRef, useEffect, useState } from "react";
import { Button, Grid, Input } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { setToken } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const inputRef = useRef();
  const [majMail, setMajMail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const email = e.target.email.value;
    if (password && email) {
      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/crypto-community/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      const data = await response.json();
      dispatch(setToken(data.token));
      navigate("/user");
    }
  };

  const convertMaj = () => {
    if (inputRef) {
      const maj = inputRef.current.value.toUpperCase();
      setMajMail(maj);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Grid.Container gap={2} justify="center">
        <Grid>
          <Input
            ref={inputRef}
            type="text"
            bordered
            color="default"
            placeholder="Identifiant (e-mail)"
            aria-label="e-mail"
            id="email"
            value={majMail}
          />
        </Grid>
        <Grid>
          <Input.Password
            bordered
            color="default"
            placeholder="Mot de passe"
            aria-label="mot de passe"
            id="password"
          />
        </Grid>
        <Grid>
          <Button type="submit" bordered color="primary">
            Se connecter
          </Button>
        </Grid>
      </Grid.Container>
      <button onClick={convertMaj}>maj</button>
    </form>
  );
}
