'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { BoxForm } from './box-form'
import { GithubProvider } from './github-provider'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from './ui/form'

const schema = z.object({
	name: z.string().min(2, 'Informe seu nome'),
	email: z.string().email('Informe uma e-mail válido.'),
	password: z.string().min(8, 'Informe uma senha válida.'),
})

type FormData = z.infer<typeof schema>

export function RegisterForm({
	className,
	...props
}: React.ComponentProps<'form'>) {
	const form = useForm<FormData>({
		defaultValues: {
			name: '',
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
			title="Cadastre-se"
			description="Crie uma conta gratuita com seu e-mail e senha."
			className={cn('flex flex-col gap-10', className)}
			{...props}
			onSubmit={handleSubmit}
		>
			<div className="grid gap-6">
				<Form {...form}>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Nome</FormLabel>
								<FormControl>
									<Input placeholder="Seu Nome" {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder="email@exemplo.com" {...field} />
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
								<FormLabel>Senha</FormLabel>
								<FormControl>
									<Input type="password" placeholder="********" {...field} />
								</FormControl>
								<FormMessage />
								<FormDescription>
									Sua senha deve ter no mínimo <b>8 caracteres</b>.
								</FormDescription>
							</FormItem>
						)}
					/>
				</Form>

				<Button type="submit" className="w-full">
					Login
				</Button>
				<div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-border after:border-t">
					<span className="relative z-10 bg-background px-2 text-muted-foreground">
						ou continue com
					</span>
				</div>

				<GithubProvider type="button" />
			</div>

			<div className="text-center text-sm">
				Já tem uma conta?{' '}
				<Link
					href="/login"
					className="underline underline-offset-2 hover:underline-offset-4"
					prefetch
				>
					Acesse agora
				</Link>
			</div>
		</BoxForm>
	)
}
