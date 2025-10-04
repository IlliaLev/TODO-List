import { NextResponse } from "next/server";
import {promises as fs} from "fs";
import path from "path";

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), "public", "test.txt");

        const fileContents = await fs.readFile(filePath, "utf-8");

        return NextResponse.json({content: fileContents});
    } catch(error) {
        console.error("Error reading file: ", error);
        return NextResponse.json(
            {error: "Failed to read file"},
            {status: 500}
        );
    }
}