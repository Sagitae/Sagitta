import "../css/homelist.css";
import Link from "next/link";
export function Homelist() {
  return (
    <div className="list">
      <td>
        <tr>
          <div> Explorar </div>
         
        </tr>
        <tr>
          <Link href="/home/Publicaciones">Publicaciones</Link>
        </tr>
        <tr>
          <Link href="/Amigos">Amigos</Link>
        </tr>
        <tr>
          <Link href="/Videos">Videos</Link>
        </tr>
        <tr>
          <Link href="/fotos">Fotos</Link>
        </tr>
        <tr>
          <Link href="/streams">Streams</Link>
        </tr>
      </td>
    </div>
  );
}
