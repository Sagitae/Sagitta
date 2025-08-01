export function Reloj() {
  return (
    <div className="reloj">
      <h2>Reloj</h2>
      <p>Hora actual: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}