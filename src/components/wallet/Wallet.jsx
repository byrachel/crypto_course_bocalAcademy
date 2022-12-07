import { Button, Spacer, Card, Text } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { removeCryptoWallet } from "../../store/userSlice";

export default function Wallet({setAddWallet}) {
  const dispatch = useDispatch();
  const cryptoWallet = useSelector((state) => state.user.cryptoWallet);

  return (
    <div>
      <Spacer y={1} />
      {cryptoWallet.length > 0
        ? cryptoWallet.map((wallet, idx) => (
            <Card css={{ mw: "400px" }} key={idx}>
              <Card.Body>
                <Text>
                  <b>
                    {wallet.name} : {wallet.adress}
                  </b>{" "}
                  ({wallet.amount} {wallet.devise})
                </Text>
                <Spacer y={1} />
                <Button
                  type="button"
                  bordered
                  color="error"
                  onPress={() => dispatch(removeCryptoWallet(wallet.adress))}
                >
                  Supprimer le wallet
                </Button>
              </Card.Body>
            </Card>
          ))
        : null}
      <Spacer y={1} />
      <Button type="button" bordered color="gradient" onPress={setAddWallet}>
        Ajouter un crypto wallet
      </Button>
    </div>
  );
}
