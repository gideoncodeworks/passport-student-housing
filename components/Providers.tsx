"use client";

import { ReactNode } from "react";
import { SiteProvider } from "@/lib/site-context";
import { CMSSiteData } from "@/lib/cms";

export function Providers({
  children,
  siteData,
}: {
  children: ReactNode;
  siteData: CMSSiteData;
}) {
  return <SiteProvider siteData={siteData}>{children}</SiteProvider>;
}
