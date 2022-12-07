import { useReducer } from "react";
import AddWallet from "../wallet/AddWallet";
import Wallet from "../wallet/Wallet";

export default function UserWallet() {
  const [addWallet, setAddWallet] = useReducer((state) => {
    return !state;
  }, false);

  return addWallet ? (
    <AddWallet setAddWallet={setAddWallet} />
  ) : (
    <Wallet setAddWallet={setAddWallet} />
  );
}
