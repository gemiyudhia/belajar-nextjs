import { ReactNode } from "react";

type ProfileLayoutProps = {
  children: ReactNode;
};

const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  return (
    <>
      <h1>Title</h1>
      <div>{children}</div>
    </>
  );
};

export default ProfileLayout;
