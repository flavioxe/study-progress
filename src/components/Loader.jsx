export function Loader({ message }) {
  return (
    <div className="loader-wrap">
      <div className="spinner" />
      <span>{message}</span>
    </div>
  );
}
