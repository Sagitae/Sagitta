import '../css/input.css';

export function Login() {
  return (
    <div align="center">
      <h1 style={{ textAlign: "center", color: "aqua" }}>Inicia Sesion</h1>
      <form>
        <input type="text" placeholder="Username" />

        <input type="password" placeholder="Password" />

        <button type="submit">Iniciar Sesion</button>
      </form>
    </div>
  );
}


