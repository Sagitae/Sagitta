import { Homelist } from "../../componentes/homelist";
import "@/css/div.css";
export default function HomeLayout({ children }) {
  return (
    <>
      <div className="container-home">
        <div className="container-list">
          <Homelist />
        </div>
        <div className="container-contenido">{children}</div>
      </div>
    </>
  );
}
