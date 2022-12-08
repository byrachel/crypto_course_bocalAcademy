import { useState } from "react";
import { Card, Text, Button, Input, Spacer, Grid } from "@nextui-org/react";

export default function AddPost({ cryptoWallet, setAddPost }) {
  const [content, setContent] = useState(" ");
  const [title, setTitle] = useState(null);
  const [error, setError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setError(false);
    if (title) {
      console.log(content, title);
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Spacer y={1} />
      <Card variant="bordered">
        <Card.Body>
          <Text>Poster une annonce :</Text>
          {error ? (
            <Text weight="bold" color="error">
              Veuillez sélectionner un wallet !
            </Text>
          ) : null}
          <select onChange={(e) => setTitle(e.target.value)} required>
            <option value={title}>Sélectionnez un wallet</option>
            {cryptoWallet.map((wallet, idx) => (
              <option value={wallet.name} key={idx}>
                {wallet.name}
              </option>
            ))}
          </select>
          <Spacer y={1} />
          <Input
            type="text"
            bordered
            color="default"
            placeholder="Annonce"
            aria-label="annonce"
            onChange={(e) => setContent(e.target.value)}
            fullWidth
          />
          <Spacer y={1} />
          <Grid.Container gap={2}>
            <Grid>
              <Button
                type="button"
                bordered
                color="gradient"
                onPress={() => setAddPost(false)}
              >
                Annuler
              </Button>
            </Grid>
            <Grid>
              <Button type="submit" color="gradient">
                Enregistrer
              </Button>
            </Grid>
          </Grid.Container>
        </Card.Body>
      </Card>
    </form>
  );
}
