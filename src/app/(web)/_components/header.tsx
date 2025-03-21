import { Container } from '../../../components/container'
import { Logo } from '../../../components/logo'
import { NavAuth } from './nav-auth'
import { NavLinks } from './nav-links'

export function Header() {
	return (
		<Container className="h-16 border-b border-b-neutral-900 lg:h-24">
			<div className="flex h-full items-center justify-between">
				<div className="basis-1/4">
					<Logo />
				</div>

				<div className="hidden h-full grow basis-2/4 md:block">
					<NavLinks />
				</div>

				<div className="basis-1/4">
					<NavAuth />
				</div>
			</div>
		</Container>
	)
}
