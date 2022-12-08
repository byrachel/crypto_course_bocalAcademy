import { useReducer } from "react";
import { Button, Spacer } from "@nextui-org/react";
import AddPost from "../blog/AddPost";

export default function UserPost({ cryptoWallet }) {
  const [addPost, setAddPost] = useReducer((state) => {
    return !state;
  }, false);

  return cryptoWallet.length > 0 ? (
    addPost ? (
      <AddPost cryptoWallet={cryptoWallet} setAddPost={setAddPost} />
    ) : (
      <>
        <Spacer y={0.5} />
        <Button type="button" size="xs" color="gradient" onPress={setAddPost}>
          + Créer un post
        </Button>
      </>
    )
  ) : null;
}
