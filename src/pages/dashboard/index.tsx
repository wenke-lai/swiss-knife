import { Loading } from "../../components/Loading";

export const Dashboard = {
  Home: Loading(() => import("./dashboard")),
};
