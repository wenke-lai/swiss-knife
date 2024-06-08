import { Outlet } from "react-router-dom";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "src/components/ui/resizable";

const Layout = () => {
  return (
    <div className="h-dvh">
      <ResizablePanelGroup direction="horizontal" className="debug">
        <ResizablePanel>One</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <Outlet />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Layout;
