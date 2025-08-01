export function Valoracion() {
  return (
    <div>
      <h1>Valora el sitio web </h1>
      <form>
        <ul>
          <li><input type="text" placeholder="Materia" /></li>
          <li><input type="number" placeholder="Calificación" /></li>
          <li><button type="submit">Guardar</button></li>
        </ul>
      </form>
    </div>
  );
}