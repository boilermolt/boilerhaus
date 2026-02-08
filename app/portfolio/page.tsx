import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'Project 1',
    description: 'Description of your first project',
    link: '#',
  },
  {
    title: 'Project 2',
    description: 'Description of your second project',
    link: '#',
  },
  {
    title: 'Project 3',
    description: 'Description of your third project',
    link: '#',
  },
]

export default function PortfolioPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Portfolio</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline">
                <a href={project.link}>View Project →</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
