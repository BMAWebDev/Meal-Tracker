// models
import { IRoute } from "@/models/router";

// components
import { Home, Settings, Profile } from "@/screens/";

const routes: IRoute[] = [
  {
    name: "Home",
    component: Home,
    key: "Home-0",
  },
  {
    name: "Settings",
    component: Settings,
    key: "Settings-1",
  },
  {
    name: "Profile",
    component: Profile,
    key: "Profile-2",
  },
];

export default routes;
