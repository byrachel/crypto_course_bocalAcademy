import { useSelector, useDispatch } from "react-redux";
import { updateCryptoWallet } from "../store/userSlice";

const withWallet = (WrappedComponent) => {
  return function (props) {
    // const isLogged = useSelector((state) => state.user.token);
    const cryptoWallet = useSelector((state) => state.user.cryptoWallet);
    const dispatch = useDispatch();

    const buyCrypto = (wallet, amount) => {
      const updatedWallet = { ...wallet, amount: wallet.amount + amount };
      dispatch(updateCryptoWallet(updatedWallet));
    };

    const sellCrypto = (wallet, amount) => {
      if (wallet.amount >= amount) {
        const updatedWallet = { ...wallet, amount: wallet.amount - amount };
        dispatch(updateCryptoWallet(updatedWallet));
      }
    };

    // return isLogged ? (
    //   <WrappedComponent cryptoWallet={cryptoWallet} {...props} />
    // ) : (
    //   <div>
    //     <p>You are not Logged In !</p>
    //   </div>
    // );
    return (
      <WrappedComponent
        cryptoWallet={cryptoWallet}
        buyCrypto={buyCrypto}
        sellCrypto={sellCrypto}
        {...props}
      />
    );
  };
};

export default withWallet;
