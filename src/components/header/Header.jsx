import { Grid, Button } from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { logout } from "../../store/userSlice";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLogged = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  return (
    <Grid.Container gap={2}>
      <Grid xs={4}>CRYPTO</Grid>
      <Grid xs={4}></Grid>
      <Grid xs={4}>
        {isLogged ? (
          <Button bordered color="gradient" onPress={() => dispatch(logout())}>
            Logout
          </Button>
        ) : location.pathname === "/login" ? (
          <Button color="gradient" onPress={() => navigate("/")}>
            Créer un compte
          </Button>
        ) : (
          <Button color="gradient" onPress={() => navigate("/login")}>
            Login
          </Button>
        )}
      </Grid>
    </Grid.Container>
  );
}
