import "./style.css";
import "@fontsource-variable/google-sans-code";

import { render } from "preact";
import { computed } from "@preact/signals";
import SettingsButton from "./components/SettingsButton";
import { appConfig } from "./lib/utils";
import Clock from "./components/Clock";

const currentFont = computed(() => {
  const { type, customValue } = appConfig.value.font;
  return type === "custom" && customValue ? customValue : "var(--font-sans)";
});

export function App() {
  return (
    <main
      style={{ fontFamily: currentFont.value }}
      className="flex h-dvh items-center justify-center"
    >
      <Clock />
      <SettingsButton />
    </main>
  );
}

render(<App />, document.getElementById("app"));
