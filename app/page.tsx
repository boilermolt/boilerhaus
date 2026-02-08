import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { siteConfig } from '@/lib/config'

export default function HomePage() {
  return (
    <div className="container py-12">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="flex max-w-[64rem] flex-col items-center gap-4 text-center mx-auto">
          <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to {siteConfig.name}
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            {siteConfig.description}
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="/about">About Me</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Portfolio</CardTitle>
            <CardDescription>Check out my latest work</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="ghost">
              <Link href="/portfolio">View Projects →</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Blog</CardTitle>
            <CardDescription>Read my latest thoughts on Substack</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="ghost">
              <Link href="/blog">Read More →</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Contact</CardTitle>
            <CardDescription>Get in touch</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="ghost">
              <Link href="/contact">Contact Me →</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
