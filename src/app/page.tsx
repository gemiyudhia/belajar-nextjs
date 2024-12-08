import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Gemi Yudhia",
  description: "Aplikasi untuk belajar Next Js",
  authors: [{ name: "Gemi Yudhia", url: `${process.env.NEXT_PUBLIC_API_URL}` }],
};

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      hello world
    </main>
  );
}
