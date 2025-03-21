import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/global.css'

export const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Lexo',
	description: '',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body
				className={`${inter.className} bg-neutral-100 antialiased dark:bg-neutral-950`}
			>
				{children}
			</body>
		</html>
	)
}
