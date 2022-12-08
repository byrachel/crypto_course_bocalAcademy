import { Button, Spacer } from "@nextui-org/react";
import Crypto from "./Crypto";

export default function Wallet({ setAddWallet, cryptoWallet }) {
  return (
    <div>
      <Spacer y={1} />
      {cryptoWallet.length > 0 ? <Crypto /> : null}
      <Spacer y={1} />
      <Button type="button" size="xs" color="gradient" onPress={setAddWallet}>
        + Ajouter un crypto wallet
      </Button>
    </div>
  );
}
