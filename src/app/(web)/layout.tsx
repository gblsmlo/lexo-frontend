import { Header } from '@/app/(web)/_components/header'
import { Container } from '@/components/container'

export default function WebLayout({ children }: { children: React.ReactNode }) {
	return (
		<Container className="flex h-screen flex-col">
			<Header />
			{children}
		</Container>
	)
}
