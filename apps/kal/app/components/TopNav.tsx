import { CalendarSearch, Search, Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";


export default function TopNav() {
  return (
    <div className="flex justify-between border-2 border-orange-400 p-4">
      <div className="flex border-2 border-yellow-500 "><CalendarSearch size={60}/><Menu size={60} /></div>
      <div className="flex border-2 border-blue-500">Search <Search size={60} /></div>
      <div className="border-2 border-green-500"><UserButton size={60}/></div>
    </div>
  );
}
