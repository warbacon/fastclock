import { appConfig, saveConfig } from "../lib/utils";
import Button from "./Button";
import { createRef, RefObject } from "preact";

type Position = "top-right" | "top-left" | "bottom-right" | "bottom-left";

const POSITION_CLASSES: Record<Position, string> = {
  "top-left": "top-4 left-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "top-right": "top-4 right-4",
};

function SettingsButton({ position = "top-right" }: { position?: Position }) {
  const dialogRef: RefObject<HTMLDialogElement> = createRef();
  const positionClass = POSITION_CLASSES[position];

  const updateFont = (
    type: "google-sans-code" | "custom",
    customValue?: string,
  ) => {
    saveConfig({
      ...appConfig.value,
      font: { type, customValue },
    });
  };

  return (
    <>
      <dialog
        ref={dialogRef}
        id="settingsDialog"
        className="mx-auto my-auto w-[90dvw] max-w-lg justify-between rounded-xl border border-black/10 bg-[Canvas] p-6 text-[CanvasText] shadow-lg backdrop:bg-black/50 dark:border-white/10"
      >
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold">Settings</h2>

          <div className="flex items-start justify-between">
            <label>Font</label>
            <div className="max-w-min space-y-4">
              <select
                value={appConfig.value.font.type}
                className="min-w-full cursor-pointer rounded-xl bg-black/10 px-3 py-1.5 transition-colors hover:bg-black/20 dark:bg-white/10 hover:dark:bg-white/20"
                onChange={(e) => {
                  const val = e.currentTarget.value as
                    | "google-sans-code"
                    | "custom";
                  updateFont(val, appConfig.value.font.customValue);
                }}
              >
                <option value="google-sans-code">Google Sans Code</option>
                <option value="custom">Custom</option>
              </select>

              {appConfig.value.font.type === "custom" && (
                <input
                  type="text"
                  value={appConfig.value.font.customValue ?? ""}
                  placeholder="Enter font name..."
                  className="rounded-lg border border-black/10 bg-black/5 px-3 py-1.5 dark:border-white/10 dark:bg-white/5"
                  onChange={(e) => updateFont("custom", e.currentTarget.value)}
                />
              )}
            </div>
          </div>

          <Button
            onClick={() => dialogRef.current?.close()}
            className="w-full"
            autoFocus
          >
            Close
          </Button>
        </div>
      </dialog>

      <Button
        id="settingsButton"
        className={`absolute ${positionClass}`}
        onClick={() => dialogRef.current?.showModal()}
      >
        Settings
      </Button>
    </>
  );
}

export default SettingsButton;
