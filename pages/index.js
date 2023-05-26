import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";

export default function HomePage() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <Web3Button icon="show" label="Connect Wallet" balance="show" />
    </div>
  );
}
