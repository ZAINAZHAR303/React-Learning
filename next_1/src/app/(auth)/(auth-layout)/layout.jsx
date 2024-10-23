export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>this is auth inner layout</h1>
        {children}
      </body>
    </html>
  );
}
