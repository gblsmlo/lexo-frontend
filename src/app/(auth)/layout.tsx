export default function AuthLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-svh">
			<div className="relative hidden bg-muted lg:block lg:basis-1/3">
				{/* <img
							src="/placeholder.svg"
							alt="Image"
							className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
						/> */}
			</div>

			<div className="flex basis-2/3 flex-col gap-4 p-6 md:p-10">
				<div className="flex justify-center gap-2 md:justify-start">
					{/* <a href="#" className="flex items-center gap-2 font-medium">
								<div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
									<GalleryVerticalEnd className="size-4" />
								</div>
								Acme Inc.
							</a> */}
				</div>
				<div className="flex flex-1 items-center justify-center">
					<div className="w-full max-w-[400px]">{children}</div>
				</div>
			</div>
		</div>
	)
}
