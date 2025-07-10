export function Projects() {
    <div className="container mx-auto max-w-4xl py-16" data-aos="fade-up">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Projects</h2>
        <p className="text-muted-foreground text-lg mb-8 text-center">
            Here are some of my recent projects that showcase my skills and passion for web development.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
            {/* Project items will go here */}
            {/* Example project item */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Project Title</h3>
                <p className="text-muted-foreground mb-4">Brief description of the project.</p>
                <a href="#" className="text-primary hover:underline">View Project</a>
            </div>
        </div>
    </div>
}