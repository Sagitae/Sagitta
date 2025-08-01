import "../css/footer.css"


export function Footer() {
  return (
    <footer>
      <div className="containerfooter">
        <div  className="Sagitta">
          <p> Sagitta</p>
          <a href="/terminos.jsx">Terminos y condiciones</a>
          <a href="/privacidad.jsx">Politica de privacidad</a>
          <a href="/privacidad.jsx">Politica de uso cookies</a>
          <a href="/terminos.jsx">Mapa del sitio</a>
          <a href="/terminos.jsx">Contacto</a>
        </div>

        <div className="Portales">
          <h1> Portales</h1>
          <a href="/ayuda">Franquicias</a>

          <a href="/PortalProvedor">Proveedores</a>

          <a href="/PortalProvedor">Empleados</a>

          <a>Accionistas</a>
        </div>
      </div>
      <div className="redessociales">
        <p> 2025 Sagittae. All rights reserved.</p>
        <p>seguir esta pagina web datos e informacion adicional </p>
      </div>
    </footer>
  );
}
