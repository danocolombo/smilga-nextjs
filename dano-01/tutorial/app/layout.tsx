import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import './globals.css';

import { Roboto } from 'next/font/google';
// import { Inter, Roboto, Inconsolata } from 'next/font/google';
// const inconsolata = Inconsolata({ subsets: ['latin'] });
// const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
    title: 'Smilga Next.js Project',
    description: 'A Next.js project with TypeScript and TailwindCSS.',
    keywords: 'Next.js, Typescript, TailwindCSS',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={roboto.className}>
                <Navbar />
                <main className='max-w-3xl mx-auto py-10'>{children}</main>
            </body>
        </html>
    );
}
