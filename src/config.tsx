import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { scroll, sepolia } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Illusium",
  projectId: "YOUR_PROJECT_ID",
  chains: [/*scroll*/ sepolia],
  transports: {
    //[scroll.id]: http("https://scroll.drpc.org"),
    [sepolia.id]: http("https://sepolia.drpc.org"),
  },
});
