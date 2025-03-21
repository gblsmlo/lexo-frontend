'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export function NavAuth() {
	function handleRegister() {
		redirect('/register')
	}

	return (
		<div className="flex items-center justify-end gap-4">
			<Link
				href="/login"
				className="font-medium text-base transition-colors duration-300 ease-linear dark:text-neutral-50 dark:hover:text-neutral-400"
			>
				Login
			</Link>

			<Button onClick={handleRegister}>Register</Button>
		</div>
	)
}
