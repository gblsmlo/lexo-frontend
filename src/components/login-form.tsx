'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { z } from 'zod'
import { BoxForm, BoxFormContent } from './box-form'
import { GithubProvider } from './github-provider'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from './ui/form'

const schema = z.object({
	email: z.string().email('Informe uma e-mail válido.'),
	password: z.string().min(8, 'Informe a senha.'),
})

type FormData = z.infer<typeof schema>

export function LoginForm({
	className,
	...props
}: React.ComponentProps<'form'>) {
	const form = useForm<FormData>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: zodResolver(schema),
	})

	const handleSubmit = form.handleSubmit((formData) => {
		console.log(formData)
	})

	return (
		<BoxForm
			title="Entre com sua conta"
			description="Enter your email below to login to your account"
			className={cn('flex flex-col gap-10', className)}
			{...props}
			onSubmit={handleSubmit}
		>
			<BoxFormContent>
				<Form {...form}>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Username</FormLabel>

								<FormControl>
									<Input
										placeholder="email@exemplo.com"
										autoComplete="email"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<div className="flex items-center">
									<FormLabel>Senha</FormLabel>
									<Link
										href="#"
										className="ml-auto inline-block text-sm hover:underline hover:underline-offset-2"
									>
										Esqueci minha senha
									</Link>
								</div>
								<FormControl>
									<Input
										type="password"
										placeholder="********"
										autoComplete="current-password"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</Form>

				<Button type="submit" className="w-full">
					Entrar
				</Button>

				<div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-border after:border-t">
					<span className="relative z-10 bg-background px-2 text-muted-foreground">
						ou continue com
					</span>
				</div>

				<GithubProvider type="button" />
			</BoxFormContent>

			<div className="text-center text-sm">
				Ainda não tem uma conta?{' '}
				<Link
					className="ml-auto inline-block text-sm hover:underline hover:underline-offset-2"
					href="/register"
					prefetch
				>
					Cadastre-se
				</Link>
			</div>
		</BoxForm>
	)
}
