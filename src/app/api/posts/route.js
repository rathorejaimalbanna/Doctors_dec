import { NextResponse } from "next/server";

export function GET()
{
    return NextResponse.json({"msg":"connected to api"},{status:200})
}