import Image from "next/image";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     <main className="flex min-h-screen w-full items-center justify-between font-inter">
      {children}
      <div>
        <Image src='/icons/auth-image.svg' alt="image" width={500} height={500}/>
      </div>
     </main>
    );
  }
  