"use client";

import { PropsWithChildren } from "react";
import { RupoUIConfig, RupoUIProvider, Toaster } from "rupoui";

const rupoUIConfig: RupoUIConfig = {
  Button: {
    radius: "lg",
  },
};

function Providers({ children }: PropsWithChildren) {
  return (
    <RupoUIProvider config={rupoUIConfig}>
      <Toaster position="top-right" />
      {children}
    </RupoUIProvider>
  );
}

export default Providers;
