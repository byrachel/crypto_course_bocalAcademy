import { Button, Spacer, Input, Grid } from "@nextui-org/react";

export default function AddWallet({
  newWallet,
  setNewWallet,
  onSubmit,
  maxLengthInput,
  setAddWallet,
}) {
  const adressLength = 12;
  return (
    <form onSubmit={onSubmit}>
      <Spacer y={1} />
      <Input
        type="text"
        bordered
        color="default"
        placeholder="Nom"
        aria-label="nom"
        onChange={(e) => setNewWallet({ ...newWallet, name: e.target.value })}
        fullWidth
        id="nom"
      />
      <Spacer y={1} />
      <Input
        type="text"
        bordered
        color="default"
        placeholder="Adresse"
        aria-label="adresse"
        onChange={(e) => maxLengthInput(e.target.value, adressLength)}
        fullWidth
        value={newWallet && newWallet.adress ? newWallet.adress : ""}
        maxLength={adressLength}
      />
      <Spacer y={1} />
      <Input
        type="number"
        bordered
        color="default"
        placeholder="Montant"
        aria-label="montant"
        onChange={(e) => setNewWallet({ ...newWallet, amount: e.target.value })}
        fullWidth
      />
      <Spacer y={1} />
      <Input
        type="text"
        bordered
        color="default"
        placeholder="Device"
        aria-label="devise"
        onChange={(e) => setNewWallet({ ...newWallet, devise: e.target.value })}
        fullWidth
      />
      <Spacer y={1} />
      <Grid.Container gap={1}>
        <Grid>
          <Button type="button" bordered onPress={() => setAddWallet()}>
            Annuler
          </Button>
        </Grid>
        <Grid>
          <Button type="submit">Enregistrer</Button>
        </Grid>
      </Grid.Container>
    </form>
  );
}
