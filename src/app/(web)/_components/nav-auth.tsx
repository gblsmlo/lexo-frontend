import Link from 'next/link'

export function NavAuth() {
	return (
		<div className="flex justify-end gap-4">
			<Link
				href="/login"
				className="font-medium text-base transition-colors duration-300 ease-linear dark:text-neutral-50 dark:hover:text-neutral-400"
			>
				Login
			</Link>

			<Link
				href="/register"
				className="font-medium text-base transition-colors duration-300 ease-linear dark:text-neutral-50 dark:hover:text-neutral-400"
			>
				Registre
			</Link>
		</div>
	)
}
