import "@styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>T3 Commerce</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
