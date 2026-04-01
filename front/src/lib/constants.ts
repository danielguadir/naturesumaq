export const CONTACT_INFO = {
    whatsapp: [
        { number: '3117974346', label: 'Ventas y Asesoría' },
        { number: '3233351819', label: 'Atención al Cliente' },
    ],
    instagram: 'https://www.instagram.com/naturasuma',
    facebook: '#', // Pending specific link
    brandName: 'Nature Sumaq',
};

export const getWhatsappLink = (number: string) => `https://wa.me/57${number}`;
