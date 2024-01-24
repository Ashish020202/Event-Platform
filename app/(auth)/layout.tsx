export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="mt-20 flex-center ">
         {children}
      </div>
    )
  }
  