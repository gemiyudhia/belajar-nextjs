import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex bg-gray-800 px-5">
      <h1 className="text-white py-2">Navbar</h1>
      <ul className="flex ml-5 items-center">
        <Link href="/">
          <li className="mr-3 text-blue-300 cursor-pointer">Home</li>
        </Link>
        <Link href="/about">
          <li className="mr-3 text-blue-300 cursor-pointer">About</li>
        </Link>
        <Link href="/about/profile">
          <li className="mr-3 text-blue-300 cursor-pointer">Profile</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
