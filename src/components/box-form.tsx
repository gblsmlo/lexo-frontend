import { cn } from '@/lib/utils'

interface BoxFormProps extends React.ComponentProps<'form'> {
	title: string
	description?: string
}

function BoxForm({
	title,
	description,
	children,
	className,
	...props
}: BoxFormProps) {
	return (
		<form className={cn('flex flex-col gap-10', className)} {...props}>
			<div className="flex flex-col justify-center gap-2 text-center">
				<h1 className="font-extrabold text-2xl lg:text-4xl">{title}</h1>
				{description && (
					<p className="text-balance text-base text-muted-foreground">
						{description}
					</p>
				)}
			</div>

			{children}
		</form>
	)
}

function BoxFormContent(props: React.ComponentProps<'div'>) {
	return <div className="space-y-6" {...props} />
}

export { BoxForm, BoxFormContent }
