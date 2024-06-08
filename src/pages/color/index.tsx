import { Loading } from "../../components/Loading";

export const Color = {
  Picker: Loading(() => import("./PickNearestColor")),
};
