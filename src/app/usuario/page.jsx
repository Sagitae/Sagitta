import "../../css/users.css";
import { Homelist } from "../../componentes/homelist"

function Usuario(){
    return  <>
      <div className="Portada">
        <div className="usuario">
          <div className="imagen">aqui va la imagen </div>

          <div>
            <h1>Nombre de usuario</h1>
            <p>Nivel de usuario</p>
          </div>
        </div>
      </div>
      <div className="Container-user">
        <div className="Datosusuario">
             <card> 
          <td>
            <h1> Datos del usuario</h1>
            <tr>Nombre: </tr>
            <tr>Apellido:</tr>
            <tr>Fecha de nacimiento: </tr>

          </td>
          </card>
           <Homelist/>
        </div>
        <div className="Publicaciones">
   
          aqui estaran las publicaciones realizadas por el perfil de usuario
        </div>
        <div className="Publicidad">
          <h1> Amigos Agregados</h1>
          <td>
            <tr>a</tr>
            <tr>b</tr>
            <tr>c</tr>
            <tr>s</tr>
            <tr>d</tr>
          </td>
        </div>
      </div>
    </>
}

export default Usuario; 


