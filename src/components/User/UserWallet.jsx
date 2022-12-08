import { useReducer } from "react";
import AddWalletContainer from "../wallet/AddWalletContainer";
import Wallet from "../wallet/Wallet";

export default function UserWallet({ cryptoWallet }) {
  const [addWallet, setAddWallet] = useReducer((state) => {
    return !state;
  }, false);

  return addWallet ? (
    <AddWalletContainer setAddWallet={setAddWallet} />
  ) : (
    <Wallet setAddWallet={setAddWallet} cryptoWallet={cryptoWallet} />
  );
}
