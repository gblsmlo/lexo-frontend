import { Sidebar } from './_components/sidebar'

export default function AdminLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="flex">
			<div className="basis-1/4">
				<Sidebar />
			</div>
			<div className="basis-3/4">{children}</div>
		</div>
	)
}
