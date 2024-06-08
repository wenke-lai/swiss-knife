import { Loading } from "../../components/Loading";

export const Layout = {
  Layout: Loading(() => import("./Layout")),
};
