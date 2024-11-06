import Link from "next/link";

export default function Error() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1>404: Page Not Found</h1>
        <h2>Sorry mate</h2>
        <Link
          href="/"
          className="bg-blue-500 p-3 rounded-md text-white font-medium"
        >
          Back to Home
        </Link>
      </div>
    );
}