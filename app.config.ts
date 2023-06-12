import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: "Meal Tracker",
  name: "Meal Tracker",
  userInterfaceStyle: "automatic",
});
