import Sidebar from "@/components/common/Sidebar";
import "@/ui/styles/global.css";
import ReactQueryProviders from "@/utils/react-query-provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "repoo",
  description: "나한테 꼭 맞는 채용정보만, 레포",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body style={{ display: "flex" }}>
        <ReactQueryProviders>
          <Sidebar />
          {children}
        </ReactQueryProviders>
      </body>
    </html>
  );
}
