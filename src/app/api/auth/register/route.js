import { NextResponse } from "next/server";
import db from "@/libs/db"
  

export function GET(){
  return NextResponse.json({
    message:"hola mundo "
  })
}

 export async function POST(request) {
  const data = await request.json();

  const userFound = await db.user.findUnique({
    where: {
      email: data.email
    }
  })

  if (userFound){
    return NextResponse.json ({
      message: "email ya existe"
    },{
      status: 400
    })
  }
  const newUser = await db.user.create({
    data
  })

  
  return NextResponse.json(newUser);
}
