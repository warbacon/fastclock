import { signal, effect } from "@preact/signals";

const currentTime = signal(new Date().toLocaleTimeString());

effect(() => {
  const interval = setInterval(() => {
    currentTime.value = new Date().toLocaleTimeString();
  }, 1000);

  return () => clearInterval(interval);
});

export default function Clock() {
  return <p className="text-[clamp(2em,18vw,10em)] font-bold">{currentTime}</p>;
}
