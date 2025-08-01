import "../css/ladingpage.css";
import "../css/Entradas.css";
import "../css/input.css";

import { Footer } from "./Footer";
import { Login } from "./Login";
import { Games } from "./Games";
import { Card } from "./Card";
import { Valoracion } from "./Valoracion";

export function Landing() {
  return (
    <>
      <div className="maincontainer">
        <div className="iniciosesion">
          <h1> Ser una compañia global de salas de videojuegos </h1>
          <Login /> o <Link href="/Registrarse">Registrate </Link>
        </div>

        <div className="moneda">
          <h1 style={{ textAlign: "center", color: "#EDDC91" }}>
            Comprar moneda digital
          </h1>
          <button type="submit">Comprar</button>
        </div>
      </div>

      <div className="Cartelera">
        <h1> Cartelera de Juegos</h1>
        <div className="juegos">
          <div className="onegame">
            <Games />
          </div>
          <div className="onegame">
            <Games />
          </div>
          <div className="onegame">
            <Games />
          </div>
          <div className="onegame">
            <Games />
          </div>
        </div>
      </div>

      <div className="Cartas">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <Card />

          <Card />
          <Card />
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <Card />

          <Card />
          <Card />
        </div>
      </div>

      <div className="Valoraciones">
        <Valoracion />
      </div>

      <Footer />
    </>
  );
}
