import GenreTabs from "@/components/common/nerdworksplus/genreTabs";
import Navbar from "@/components/common/nerdworksplus/navigationBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
