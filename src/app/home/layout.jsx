import { Homelist } from "../../componentes/homelist"

export default function HomeLayout({children}){
    return <>
    <Homelist/>
{children}
    </>
}