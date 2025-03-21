import { Header } from '@/app/(web)/_components/header'
import { Container } from '@/components/container'

export default function HomePage() {
	return (
		<Container>
			<Header />
			<h1 className="text-white">Home</h1>
		</Container>
	)
}
