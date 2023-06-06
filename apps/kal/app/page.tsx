import Image from 'next/image'
import { UserButton } from '@clerk/nextjs';
import TopNav from './components/TopNav';
import SideNav from './components/SideNav';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    Turbo-Cal - Alpha 1.0
    <UserButton/>
    </main>
  );
}
