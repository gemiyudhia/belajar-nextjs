import { ReactNode } from "react"

type AboutLayoutProps = {
  children: ReactNode;
}

const AboutLayout = ({children}: AboutLayoutProps) => {
  return (
   <>
    <nav className="fixed right-0 top-10 h-screen w-60 bg-gray-800">
      <ul className="text-white p-5">
        <li>Home</li>
        <li>About</li>
        <li>Profile</li>
      </ul>
    </nav>
    <div>
      {children}
    </div>
   </>
  )
}

export default AboutLayout
