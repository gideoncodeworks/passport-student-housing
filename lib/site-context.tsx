"use client";

import { createContext, useContext, ReactNode } from "react";
import { CMSSiteData, fallbackSiteData } from "./cms";

const SiteContext = createContext<CMSSiteData>(fallbackSiteData);

export function SiteProvider({
  children,
  siteData,
}: {
  children: ReactNode;
  siteData: CMSSiteData;
}) {
  return (
    <SiteContext.Provider value={siteData}>{children}</SiteContext.Provider>
  );
}

export function useSiteData() {
  return useContext(SiteContext);
}
