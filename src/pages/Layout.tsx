import { TbSettings, TbUserCircle } from "react-icons/tb";
import { Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <header className="max-h-16 debug">
      <div>
        <input type="search" />
      </div>
      <div className="w-16 row middle">
        <TbSettings />
        <TbUserCircle />
      </div>
    </header>
  );
};

export const Sidebar = () => {
  return (
    <aside className="grid grid-rows-[1fr,auto] overflow-hidden h-dvh">
      <menu>
        <li>link</li>
        <li>link</li>
        <li>link</li>
      </menu>
      <footer>copyright</footer>
    </aside>
  );
};

export const Layouts = () => {
  return (
    <div className="grid grid-cols-[auto,1fr] w-full h-dvh divide-x">
      <Sidebar />
      <main className="grid grid-rows-[auto,1fr] overflow-hidden h-dvh">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};
