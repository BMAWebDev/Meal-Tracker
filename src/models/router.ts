import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

export type IRouteName = "Home" | "Settings" | "Profile";
export interface IRoute {
  name: IRouteName;
  component: React.FC;
  options?: BottomTabNavigationOptions;

  // extra
  key: string; // unique id
}
