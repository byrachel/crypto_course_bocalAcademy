import { Grid, User, Button } from "@nextui-org/react";

export default function UserCard({ user, setDisplayUserPosts }) {
  return (
    <Grid.Container gap="2">
      <Grid>
        <User
          src="https://cdn-icons-png.flaticon.com/512/147/147142.png"
          name={`${user.lastname.toUpperCase()} ${user.firstname}`}
          description={user.email}
        />
      </Grid>
      <Grid>
        <Button
          type="button"
          bordered
          color="gradient"
          size="sm"
          onPress={() => setDisplayUserPosts(false)}
        >
          Mon wallet
        </Button>
      </Grid>
      <Grid>
        <Button
          type="button"
          bordered
          color="gradient"
          size="sm"
          onPress={() => setDisplayUserPosts(true)}
        >
          Mes posts
        </Button>
      </Grid>
    </Grid.Container>
  );
}
