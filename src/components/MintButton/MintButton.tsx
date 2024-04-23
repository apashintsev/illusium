import { FC } from "react";
import { toast } from "react-toastify";
import { config } from "../../config";
import { simulateContract, writeContract } from "wagmi/actions";
import { abi } from "./abi";
import { ethers } from "ethers";
import { useAccount } from "wagmi";

type HexString = `0x${string}`;

type IMintButtonProps = {
  tokenId: number;
  baseUriForTokens: string;
  price: string;
};

export const MintButton: FC<IMintButtonProps> = ({
  tokenId,
  baseUriForTokens,
  price,
}) => {
  const { address } = useAccount();

  const quantity = 1;
  const contractAddress = "0x457d807b8ad88584968d45654e0474D7Cd2D0786";
  const ref = "0x123d807b8ad88584968d45654e0474D7Cd2D0456";
  const claim = async () => {
    const _allowlistProof = {
      proof: [ethers.ZeroHash] as const,
      quantityLimitPerWallet: ethers.MaxUint256,
      pricePerToken: ethers.parseEther(price),
      currency: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    };

    try {
      console.log({ address });
      console.log({ baseUriForTokens });
      if (!address) {
        toast.warn("Connect wallet");
        return;
      }
      const { request } = await simulateContract(config, {
        abi,
        address: contractAddress as HexString,
        functionName: "claim",
        args: [
          address,
          BigInt(tokenId),
          BigInt(quantity),
          "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          ethers.parseEther(price),
          //@ts-ignore
          _allowlistProof,
          "0x",
        ],
        value: ethers.parseEther(price),
      });
      const makeTx = writeContract(config, request);
      toast
        .promise(makeTx, {
          pending: "Pending transaction...",
          success: "NFT has been minted! 👌",
          error: "Error has been occured 🤯",
        })
        .then((_) => {
          //@ts-ignore
          window.dataLayer.push({
            event: "nft_claim_success",
            eventProps: {
              referrerId: ref,
              userAddress: address,
              tokenId: tokenId,
            },
          });
        });
    } catch (e: any) {
      console.log({ e });
      toast.error(e.message);
    }
  };

  const test = () => {
    if (!!address) {
      //@ts-ignore
      window.dataLayer.push({
        event: "nft_claim_success",
        eventProps: {
          referrerId: ref,
          userAddress: address,
          tokenId: tokenId,
        },
      });
    }
  };

  return (
    <>
      <button onClick={claim}>Mint (claim) for {price} ETH</button>
      <button onClick={test}>test</button>
    </>
  );
};
