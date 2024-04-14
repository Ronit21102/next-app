import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";


export function GET(request:NextRequest){

    return NextResponse.json([
        {id:1 , name:"Ronit", product:"protein"},
        {id:2 , name:"ROushan", product:"jai"},
        {id:3 , name:"kalu", product:"mi"},
    ])
}

export async function POST(request:NextRequest){
    const body = await request.json()

    const validation  = schema.safeParse(body);

    if(!validation.success){
        return NextResponse.json(validation.error.errors ,{status:400})
    }

    return NextResponse.json({id:10 , name:body.name ,product:body.product},{status:201})
}