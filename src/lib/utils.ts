import { signal } from "@preact/signals";

export interface AppConfig {
  font: {
    type: "google-sans-code" | "custom";
    customValue?: string;
  };
}

const DEFAULT_CONFIG: AppConfig = {
  font: {
    type: "google-sans-code",
  },
};

export const appConfig = signal<AppConfig>(loadConfig() ?? DEFAULT_CONFIG);

function loadConfig(): AppConfig | null {
  try {
    const stored = localStorage.getItem("app-config");
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

export function saveConfig(config: AppConfig) {
  appConfig.value = config;
  localStorage.setItem("app-config", JSON.stringify(config));
}
