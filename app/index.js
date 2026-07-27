import { Redirect } from "expo-router";

// App entry point -> redirects straight into the Welcome screen
export default function Index() {
  return <Redirect href="/welcome" />;
}
