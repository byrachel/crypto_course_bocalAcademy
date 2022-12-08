import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCryptoWallet } from "../../store/userSlice";
import AddWallet from "./AddWallet";

export default function AddWalletContainer({ setAddWallet }) {
  const dispatch = useDispatch();
  const [newWallet, setNewWallet] = useState(null);

  const maxLengthInput = (string, limit) => {
    const limitedString =
      string.length >= limit ? string.substring(0, limit) : string;
    console.log(limitedString);
    setNewWallet({ ...newWallet, adress: limitedString });
  };

  const onSubmit = (e) => {
    console.log(e.target.nom.value);
    e.preventDefault();
    if (newWallet) {
      dispatch(setCryptoWallet(newWallet));
      setAddWallet();
    }
  };

  return (
    <>
      <h3>Ajouter un wallet :</h3>
      <AddWallet
        newWallet={newWallet}
        setNewWallet={setNewWallet}
        onSubmit={onSubmit}
        maxLengthInput={maxLengthInput}
        setAddWallet={setAddWallet}
      />
    </>
  );
}
