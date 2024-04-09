import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { scroll } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Illusium",
  projectId: "YOUR_PROJECT_ID",
  chains: [scroll],
  transports: {
    [scroll.id]: http("https://scroll.drpc.org"),
  },
});
