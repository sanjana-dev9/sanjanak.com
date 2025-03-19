import Link from "next/link";

export default function AboutPage() {
	return (
		<div className="max-w-4xl mx-auto">
			{/* <h1 className="text-3xl font-bold mb-8">ABOUT ME</h1> */}

			<div className="space-y-8">
				{/* Introduction Section */}
				<section>
					<p className="text-gray-700 leading-relaxed">
						Hello! I&apos;m Sanjana, a curious engineer and avid
						reader giving a shot at writing.
					</p>
				</section>

				{/* Current Focus */}
				<section>
					<h2 className="text-2xl font-semibold mb-4">
						Current Focus
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="p-4 bg-[#F3F3F6] rounded-lg border border-[#DBDBDB]">
							<h3 className="font-medium mb-2">
								ROS Development
							</h3>
							<p className="text-sm text-gray-600">
								Exploring and developing packages for sensors
								and real world applications like path planning
								and navigation.
							</p>
						</div>
						<div className="p-4 bg-[#F3F3F6] rounded-lg border border-[#DBDBDB]">
							<h3 className="font-medium mb-2">
								Embedded Software Development
							</h3>
							<p className="text-sm text-gray-600">
								Breaking down and recreating all the protocols
								and algorithms I have heard of.
							</p>
						</div>
					</div>
				</section>

				{/* Projects Section */}
				<section>
					<h2 className="text-2xl font-semibold mb-4">
						Featured Projects
					</h2>
					<div className="space-y-4">
						{/* <Link
							href="/projects/rigit"
							className="block p-4 bg-[#F3F3F6] rounded-lg border border-[#DBDBDB] hover:border-gray-400 transition-colors"
						>
							<div className="flex items-center justify-between">
								<h3 className="font-medium">Rigit.io</h3>
								<svg
									className="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</div>
							<p className="text-sm text-gray-600 mt-2">
								An AI-powered platform for content creation and
								management.
							</p>
						</Link> */}
					</div>
				</section>

				{/* Contact Section */}
				<section>
					<h2 className="text-2xl font-semibold mb-4">
						Get in Touch
					</h2>
					<div className="flex space-x-4">
						<a
							href="https://github.com/sanjana-dev9"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-gray-800 transition-colors"
						>
							GitHub
						</a>
						<a
							href="https://www.linkedin.com/in/sanjana-kumari-11aa9614a/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-gray-800 transition-colors"
						>
							LinkedIn
						</a>
						<a
							href="mailto:sanjana01999@gmail.com"
							className="text-gray-600 hover:text-gray-800 transition-colors"
						>
							Email
						</a>
					</div>
				</section>
			</div>
		</div>
	);
}
