import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import ThemeToggler from './ThemeToggler';

const Navbar = () => {
  return (
    <div className="fixed w-full bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between z-41">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          width={30}
          height={30}
          className="rounded-full object-contain"
        />
      </Link>

      <div className='flex items-center'>
        <ThemeToggler />
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback className="text-black">BT</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={'/profile'}>Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={'/auth'}>Logout</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
