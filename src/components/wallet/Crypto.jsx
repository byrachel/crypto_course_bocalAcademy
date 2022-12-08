import { Button, Grid, Spacer, Card } from "@nextui-org/react";
import React from "react";
import { useDispatch } from "react-redux";
import withWallet from "../../hoc/withWallet";
import { removeCryptoWallet } from "../../store/userSlice";

const Crypto = (props) => {
  const wallet = props.cryptoWallet;
  const dispatch = useDispatch();

  return (
    <>
      {wallet.map((elt, idx) => (
        <Card css={{ mw: "400px" }} key={idx}>
          <Card.Body>
            <p>
              {elt.name} :{" "}
              <b>
                {elt.amount} {elt.devise}
              </b>
            </p>
            <Grid.Container gap={1}>
              <Grid>
                <Button
                  size="sm"
                  bordered
                  type="button"
                  onPress={() => props.buyCrypto(elt, 10)}
                >
                  + 10 {elt.devise}
                </Button>
              </Grid>
              <Grid>
                <Button
                  size="sm"
                  bordered
                  type="button"
                  onPress={() => props.sellCrypto(elt, 10)}
                >
                  - 10 {elt.devise}
                </Button>
              </Grid>
            </Grid.Container>
            <Spacer y={0.5} />
            <Button
              type="button"
              bordered
              color="error"
              onPress={() => dispatch(removeCryptoWallet(elt.adress))}
              size="xs"
            >
              Supprimer le wallet
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};
export default withWallet(Crypto);
