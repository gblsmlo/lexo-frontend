import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/global.css'
import { ThemeProvider } from '@/components/theme-provider'

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
			<body className={`${inter.className} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
