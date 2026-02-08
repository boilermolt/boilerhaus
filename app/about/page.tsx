import { siteConfig } from '@/lib/config'

export default function AboutPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-4xl font-bold mb-8">About {siteConfig.name}</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          Add your bio and story here. This is your chance to introduce yourself
          and share what makes you unique.
        </p>
        <h2>Background</h2>
        <p>Share your professional background and experience.</p>
        <h2>Skills</h2>
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
        </ul>
        <h2>Interests</h2>
        <p>What drives you? What are you passionate about?</p>
      </div>
    </div>
  )
}
