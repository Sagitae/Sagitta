
import "../css/ladingpage.css";
import "../css/Entradas.css";
import "../css/input.css";
import "../css/globals.css"

import { Footer } from "../componentes/Footer";
import { Login } from "../componentes/Login";
import { Games } from "../componentes/Games";
import { Card } from "../componentes/Card";
import { Valoracion } from "../componentes/Valoracion";

export default function landingpage (){
    return <>
    <div className="maincontainer">
        <div className="iniciosesion">
          <h1> Ser una compañia global de salas de videojuegos </h1>
          <Login /> o <a href="/Registrarse">Registrate </a>
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

      </>
}