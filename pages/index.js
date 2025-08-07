import Link from "next/link";

export default function Home() {
	return (
		<div>
			<h1>Home</h1>
			<nav>
				<ul>
					<li>
						<Link href="/csr">Client Side Rendering (CSR)</Link>
					</li>
					<li>
						<Link href="/ssr">Server Side Rendering (SSR)</Link>
					</li>
					<li>
						<Link href="/ssg">Static Site Generation (SSG)</Link>
					</li>
					<li>
						<Link href="/isr">
							Incremental Static Regeneration (ISR)
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

// this page is unused
