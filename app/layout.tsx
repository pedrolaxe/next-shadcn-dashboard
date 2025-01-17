import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/app/providers/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Prime Manager',

    description:
		'painel de controle para gerenciamento de projetos',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<ThemeProvider attribute='class' defaultTheme='light' enableSystem>
				<body className={inter.className}>{children}</body>
			</ThemeProvider>
		</html>
	);
}
