import { Grid, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <Grid.Container gap={2}>
      <Grid xs={4}>CRYPTO</Grid>
      <Grid xs={4}></Grid>
      <Grid xs={4}>
        <Button onPress={() => navigate("/login")}>Login</Button>
      </Grid>
    </Grid.Container>
  );
}
