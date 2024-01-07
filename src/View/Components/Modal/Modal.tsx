import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { cn } from "../../../App/utils/cn";
import { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  children: ReactNode;
  title: ReactNode;
  onClose?: () => void;
}

const Modal = ({ children, open, title, onClose }: ModalProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 bg-black/80 backdrop-blur-sm z-50 ",
            "data-[state=open]:animate-overlayShow"
          )}
        />
        <Dialog.Content
          className={cn(
            "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 space-y-10 bg-white rounded-2xl z-[51] shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] w-full max-w-[300px]  sm:max-w-[400px] outline-none",
            "data-[state=open]:animate-contentShow"
          )}
        >
          <header className="h-12 flex items-center justify-between text-gray-800">
            {title}
            <button
              className="w-12 h-12 flex items-center justify-center outline-none"
              onClick={onClose}
            >
              <Cross2Icon className="w-6 h-6" />
            </button>
          </header>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
