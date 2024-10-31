"use client";

import { useRouter } from "next/navigation";
import { useRef, ReactNode, MouseEventHandler } from "react";

type ModalProps = {
  children: ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  const overlay = useRef(null);
  const router = useRouter();

  const close: MouseEventHandler = (e: any) => {
    if (e.target === overlay.current) {
      router.back();
    }
  };

  return (
    <div
      ref={overlay}
      className="fixed z-10 top-0 left-0 right-0 bottom-0 mx-auto bg-black/60"
      onClick={close}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default Modal;
