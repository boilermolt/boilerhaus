import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { siteConfig } from '@/lib/config'
import { ArrowRight, Code2, Newspaper, MessageSquare } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="relative">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-animate -z-10" />
      <div className="fixed inset-0 bg-pixel-grid opacity-30 -z-10" />
      
      <div className="container py-12">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
          </div>
          
          <div className="relative z-10 flex max-w-[80rem] flex-col items-center gap-8 text-center">
            {/* Avatar */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-2 border-primary/50 glow-primary">
                <Image
                  src="/images/avatar.jpg"
                  alt={siteConfig.name}
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Main heading with gradient and glitch effect */}
            <div className="space-y-4">
              <h1 
                className="text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl text-gradient-primary animate-in fade-in slide-in-from-bottom-4 duration-1000"
                data-text={siteConfig.name}
              >
                {siteConfig.name}
              </h1>
              <p className="max-w-[42rem] text-xl sm:text-2xl text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                {siteConfig.description}
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Button asChild size="lg" className="glow-primary hover:glow-primary group">
                <Link href="/about" className="flex items-center gap-2">
                  Explore
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/50 hover:border-primary hover:glow-primary">
                <Link href="/portfolio">View Work</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-secondary/50 hover:border-secondary hover:glow-secondary">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
            
            {/* Stats or quick links */}
            <div className="flex gap-8 text-sm text-muted-foreground pt-8 animate-in fade-in duration-1000 delay-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span>Available for projects</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Feature Cards */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 py-12">
          <Card className="group hover:border-primary/50 transition-all duration-300 hover:glow-primary bg-card/80 backdrop-blur">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:glow-primary transition-all">
                  <Code2 className="w-5 h-5" />
                </div>
                <CardTitle className="text-gradient-primary">Portfolio</CardTitle>
              </div>
              <CardDescription>Check out my latest work and projects</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="ghost" className="w-full justify-between group-hover:text-primary">
                <Link href="/portfolio">
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="group hover:border-secondary/50 transition-all duration-300 hover:glow-secondary bg-card/80 backdrop-blur">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary/10 text-secondary group-hover:glow-secondary transition-all">
                  <Newspaper className="w-5 h-5" />
                </div>
                <CardTitle className="text-gradient-secondary">Blog</CardTitle>
              </div>
              <CardDescription>Read my latest thoughts on Substack</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="ghost" className="w-full justify-between group-hover:text-secondary">
                <Link href="/blog">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="group hover:border-accent/50 transition-all duration-300 hover:glow-accent bg-card/80 backdrop-blur sm:col-span-2 lg:col-span-1">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:glow-accent transition-all">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <CardTitle className="text-gradient-accent">Contact</CardTitle>
              </div>
              <CardDescription>Let's build something together</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="ghost" className="w-full justify-between group-hover:text-accent">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
        
        {/* Recent work preview or additional content can go here */}
      </div>
    </div>
  )
}
