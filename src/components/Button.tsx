export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`cursor-pointer rounded-xl bg-black/10 px-3 py-1.5 transition-colors hover:bg-black/20 active:bg-black/30 dark:bg-white/10 hover:dark:bg-white/20 active:dark:bg-white/30 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
