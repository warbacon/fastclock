export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`transition-color cursor-pointer rounded-xl bg-black/10 px-3 py-1.5 hover:bg-black/20 dark:bg-white/10 hover:dark:bg-white/20 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
