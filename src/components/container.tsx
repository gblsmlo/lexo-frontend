interface ContainerProps extends React.ComponentProps<'div'> {
	children?: React.ReactNode
	className?: string
}

export function Container({ children, className, ...props }: ContainerProps) {
	return (
		<div className={`container mx-auto ${className}`} {...props}>
			{children}
		</div>
	)
}
