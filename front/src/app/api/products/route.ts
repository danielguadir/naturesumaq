import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const MOCK_PRODUCTS = [
    {
        id: '1',
        name: 'Shampoo Natural Sumaq',
        description: 'Fórmula enriquecida con extractos botánicos para un cabello radiante y fuerte.',
        price: 35000,
        category: 'shampoo',
        imageUrl: '/images/producto2.jpg',
    },
    {
        id: '2',
        name: 'Aceite Esencial de la Tierra',
        description: 'Hidratación profunda y aroma relajante extraído de semillas seleccionadas.',
        price: 42000,
        category: 'oil',
        imageUrl: '/images/producto1.jpg',
    }
];

const prisma = process.env.DATABASE_URL ? new PrismaClient() : null;

export async function GET() {
    if (!prisma) {
        return NextResponse.json(MOCK_PRODUCTS);
    }

    try {
        const products = await prisma.product.findMany();
        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json(MOCK_PRODUCTS);
    } finally {
        await prisma.$disconnect();
    }
}
