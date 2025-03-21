'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
	{
		name: 'Dashboard',
		href: '/dashboard',
	},
	{
		name: 'Deadlines',
		href: '/deadlines',
	},
	{
		name: 'Profile',
		href: '/me',
	},
	{
		name: 'Settings',
		href: '/settings',
	},
]

export function Sidebar() {
	const pathname = usePathname()

	return (
		<aside className="text-white">
			<nav className="flex h-full max-w-[240px] flex-col gap-10">
				{links.map((link) => (
					<Link
						key={link.name}
						href={link.href}
						className="flex h-full items-center border-b border-b-transparent font-medium text-base transition-colors duration-300 ease-linear data-[is-active=true]:border-b-neutral-100 dark:text-neutral-50 dark:hover:text-neutral-400"
						data-is-active={link.href === pathname}
					>
						{link.name}
					</Link>
				))}
			</nav>
		</aside>
	)
}
