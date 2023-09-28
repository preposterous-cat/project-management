import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";


export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, password } = body;

        const saltRounds = 10;
        const hashedPassword = await bcrypt(password, saltRounds);

        const user = await prisma.user.create({
            data: { name, email, password: hashedPassword }
        });

        return NextResponse.json(user);
    } catch (error) {
        console.log(error);
    }

}
