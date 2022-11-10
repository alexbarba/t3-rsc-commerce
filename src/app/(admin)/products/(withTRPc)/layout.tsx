"use client";
import type { FC, ReactNode } from "react";
import { ClientProvider } from "client/trpcClient";

const layout: FC<{ children: ReactNode }> = ({ children }) => {
  return <ClientProvider>{children}</ClientProvider>;
};

// export default trpc.withTRPC(layout);
export default layout;
