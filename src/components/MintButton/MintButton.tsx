import { FC } from "react";
import { toast } from "react-toastify";
import { config } from "../../config";
import { simulateContract, writeContract } from "wagmi/actions";
import { abi } from "./abi";

type HexString = `0x${string}`;

type IMintButtonProps = {
  contractAddress: string;
  baseUriForTokens: string;
  price: string;
};

export const MintButton: FC<IMintButtonProps> = ({
  contractAddress,
  baseUriForTokens,
  price,
}) => {
  const lazyMint = async () => {
    try {
      const { request } = await simulateContract(config, {
        abi,
        address: contractAddress as HexString,
        functionName: "lazyMint",
        args: [1n, baseUriForTokens, "0x"],
      });
      const makeTx = writeContract(config, request);
      toast
        .promise(makeTx, {
          pending: "Pending transaction...",
          success: "NFT has been minted! 👌",
          error: "Error has been occured 🤯",
        })
        .then((_) => {});
    } catch (e: any) {
      console.log({ e });
      toast.error(e.message);
    }
  };

  return <button onClick={lazyMint}>Mint for {price} ETH</button>;
};
