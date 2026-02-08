import { Button } from '@/components/ui/button'

export default function ResumePage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Resume</h1>
        <Button asChild>
          <a href="/resume.pdf" download>Download PDF</a>
        </Button>
      </div>
      
      <div className="prose dark:prose-invert max-w-none">
        <section className="mb-8">
          <h2>Experience</h2>
          <div className="mb-4">
            <h3>Job Title</h3>
            <p className="text-muted-foreground">Company Name • 2020 - Present</p>
            <ul>
              <li>Key achievement or responsibility</li>
              <li>Key achievement or responsibility</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-8">
          <h2>Education</h2>
          <div className="mb-4">
            <h3>Degree Name</h3>
            <p className="text-muted-foreground">University Name • 2016 - 2020</p>
          </div>
        </section>
        
        <section>
          <h2>Skills</h2>
          <ul>
            <li>Skill category: Specific skills</li>
            <li>Skill category: Specific skills</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
