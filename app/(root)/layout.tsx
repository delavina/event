import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex h-screen flex-col" suppressHydrationWarning>
        <main className="flex-1">
          <Header />
            {children}
          <Footer />
        </main>
      </div>
    )
  }