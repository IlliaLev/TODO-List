import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          bg-[linear-gradient(to_right,#AA7BC3_5%,#FF784F_95%)]
          w-screen h-screen
          flex justify-center 
          `}
      >
        {children}
      </body>
    </html>
  );
}
