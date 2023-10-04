import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";


export async function POST(request) {
    let response;
    try {
        const body = await request.json();
        const { name, email, password } = body;

        //Validasi
        //Memeriksa inputan kosong
        if (!name || !email || !password) {
            response = {
                status: 400,
                message: 'I see there is an empty field'
            }
            return NextResponse.json(response);

        }

        // Memeriksa apakah alamat email sudah ada dalam basis data
        const existingEmail = await prisma.user.findUnique({
            where: { email }
        });

        if (existingEmail) {
            response = {
                status: 400,
                message: 'Sorry, the email has already been used.'
            }
            return NextResponse.json(response);

        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = await prisma.user.create({
            data: { name, email, password: hashedPassword }
        });

        response = {
            status: 200,
            message: 'You did it! You completely start your journey'
        }
    } catch (error) {
        console.log(error);
        response = {
            status: 400,
            message: 'My apologies, there must have been a small mistake. Please double-check the form.'
        }
    }
    return NextResponse.json(response);
}
