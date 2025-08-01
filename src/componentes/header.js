import "../css/header.css";
import Link from "next/link";



export function Header() {
  return (
    <header>
      <div className="topbarright">
        <img
          src="../img/logo1.jpg"
          width={50}
          height={50}
          alt="logotipo"
        />
        <Link href="/">Sagitta</Link>

        <input
          type="text"
          className="searchinput"
          placeholder="Realiza una busqueda "
        />
      </div>
      <div className="topbarcenter">
        <Link href="/home">Home</Link>
        <Link href="/messenger">Messenger</Link>
        <Link href="/ubicaciones">Ubicaciones</Link>
        <Link href="/tienda">Tienda</Link>
      </div>
      <div className="topbarleft">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/Clanes">Clanes</Link>
        <Link href="/wallet">Wallet</Link>
        <Link href="/usuario">Usuario</Link>
      </div>
    </header>
  );
}
