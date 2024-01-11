import * as DropdownMenuProps from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";

interface DropdownMenuProps {
  open: boolean;
  onClose?: () => void;
  children: ReactNode;
  activeCategoryFilter: string;
}

const DropdownMenu = ({
  open,
  activeCategoryFilter,
  onClose,
  children,
}: DropdownMenuProps) => {
  return (
    <DropdownMenuProps.Root open={open} onOpenChange={onClose}>
      <DropdownMenuProps.Trigger asChild>
        <button
          className=" w-[220px] p-[5px] rounded-md  inline-flex items-center justify-center text-violet11 bg-white  outline-none  "
          aria-label="Customise options"
        >
          <span className="uppercase text-fuscous-gray-950 text-[.9rem] cursor-pointer ">
            {activeCategoryFilter}
          </span>
        </button>
      </DropdownMenuProps.Trigger>

      <DropdownMenuProps.Portal>
        <DropdownMenuProps.Content
          className="min-w-[220px] bg-white rounded-md p-[5px] outline-none border-none  data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <DropdownMenuProps.Item className="outline-none border-none">
            {children}
          </DropdownMenuProps.Item>
        </DropdownMenuProps.Content>
      </DropdownMenuProps.Portal>
    </DropdownMenuProps.Root>
  );
};

export default DropdownMenu;
