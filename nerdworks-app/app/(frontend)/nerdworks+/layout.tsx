import GenreTabs from "@/components/common/nerdworksplus/genreTabs";
import Navbar from "@/components/common/nerdworksplus/navigationBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "nerdwork+",
   description: 'The Netflix for comics – Read. Enjoy. Nerd Out.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="flex flex-col">
          <Navbar/>
            <GenreTabs/>
        </div>
          {children}
      </body>
    </html>
  );
}
