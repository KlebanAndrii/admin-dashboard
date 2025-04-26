import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import { CreditCard, Folders, LayoutDashboard, Newspaper, Settings, User } from 'lucide-react';
import Link from 'next/link';

const Sidebar = ({ onItemClick }: { onItemClick?: () => void }) => {
  return (
    <Command className="bg-secondary rounded-none h-full">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <Link href={'/'} onClick={onItemClick}>Dashboard</Link>
          </CommandItem>
          <CommandItem>
            <Newspaper className="mr-2 h-4 w-4" />
            <Link href={'/posts'} onClick={onItemClick}>Posts</Link>
          </CommandItem>
          <CommandItem>
            <Folders className="mr-2 h-4 w-4" />
            <Link href={'#'} onClick={onItemClick}>Categories</Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className='mr-2 h-4 w-4' />
            <span onClick={onItemClick}>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className='mr-2 h-4 w-4' />
            <span onClick={onItemClick}>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className='mr-2 h-4 w-4' />
            <span onClick={onItemClick}>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default Sidebar;
