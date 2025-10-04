import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const data = await request.json();
    if(!data.name || !data.email) {
        return NextResponse.json(
            {message: "Required both name and email"},
            {status: 400},
        );
    }

    console.log("Received data: ", data);

    return NextResponse.json({ message: "Data Received!", data: data});
}