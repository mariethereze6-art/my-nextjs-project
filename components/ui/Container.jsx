// components/ui/Container.jsx
export default function Container({ children, className = "" }) {
  return (
    <div className={`2xl:container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}