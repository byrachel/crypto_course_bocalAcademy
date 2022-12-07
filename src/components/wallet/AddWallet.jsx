import { useState } from "react";
import { Button, Spacer, Input } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { setCryptoWallet } from "../../store/userSlice";

export default function AddWallet({ setAddWallet }) {
  const dispatch = useDispatch();
  const [newWallet, setNewWallet] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (newWallet) {
      dispatch(setCryptoWallet(newWallet));
      setAddWallet();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Ajouter un wallet :</h3>
      <Spacer y={1} />
      <Input
        type="text"
        bordered
        color="default"
        placeholder="Nom"
        aria-label="nom"
        onChange={(e) => setNewWallet({ ...newWallet, name: e.target.value })}
        fullWidth
      />
      <Spacer y={1} />
      <Input
        type="text"
        bordered
        color="default"
        placeholder="Adresse"
        aria-label="adresse"
        onChange={(e) => setNewWallet({ ...newWallet, adress: e.target.value })}
        fullWidth
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
      <Button type="submit">Enregistrer</Button>
    </form>
  );
}
