import {
  CloseButton,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { useState } from "react";
import { TbSettings, TbUserCircle } from "react-icons/tb";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <header className="min-h-16 grid grid-cols-[1fr,auto] px-16 py-4">
      <div className="max-w-xs">
        <input
          type="search"
          className="w-full border"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="gap-4 row center">
        {/* Settings */}
        <Popover className="relative">
          <PopoverButton>
            <TbSettings />
          </PopoverButton>
          <PopoverPanel anchor="bottom end">
            <menu>
              <li>hi</li>
              <li>there</li>
            </menu>
            <CloseButton>X</CloseButton>
          </PopoverPanel>
        </Popover>

        {/* Avatar */}
        <Popover className="relative">
          <PopoverButton>
            <TbUserCircle />
          </PopoverButton>
          <PopoverPanel anchor="bottom end">
            <menu>
              <li>hi</li>
              <li>there</li>
            </menu>
            <CloseButton>X</CloseButton>
          </PopoverPanel>
        </Popover>
      </div>
    </header>
  );
};

const Sidebar = () => {
  return (
    <aside className="grid grid-rows-[auto,1fr,auto] gap-4 p-4 overflow-hidden h-dvh">
      <div>
        <Link to="/">
          <h1>Wenke Studio</h1>
        </Link>
      </div>
      <menu>
        <li>
          <Link to="/color">Color</Link>
        </li>
      </menu>
      <footer>copyright</footer>
    </aside>
  );
};

const Layout = () => {
  return (
    <div className="grid grid-cols-[auto,1fr] w-full h-dvh divide-x">
      <Sidebar />
      <main className="grid grid-rows-[auto,1fr] overflow-hidden h-dvh divide-y">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
