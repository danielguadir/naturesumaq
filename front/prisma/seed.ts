import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.product.deleteMany();
    await prisma.product.createMany({
        data: [
            {
                name: 'Shampoo de Romero y Menta',
                description: 'Limpieza profunda y fortalecimiento capilar con extractos naturales.',
                price: 28000,
                category: 'shampoo',
                imageUrl: '/images/shampoo.png',
            },
            {
                name: 'Aceite de Coco Orgánico',
                description: 'Hidratación intensa para el cabello y la piel, prensado en frío.',
                price: 18000,
                category: 'oil',
                imageUrl: '/images/oil.png',
            },
        ],
    });
    console.log('Database seeded successfully');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
