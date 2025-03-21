import Link from 'next/link'

export function Logo() {
	return (
		<Link
			href="/"
			className="font-medium text-2xl text-neutral-900 dark:text-neutral-50"
		>
			Lexo
		</Link>
	)
}
