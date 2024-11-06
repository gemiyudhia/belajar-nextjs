import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Gemi Yudhia",
  description: "Aplikasi untuk belajar Next Js",
  authors: [{ name: "Gemi Yudhia", url: "http://localhost:3000" }],
};

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      hello world
    </main>
  );
}
