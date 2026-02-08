'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission (e.g., via API route with Resend)
    setSubmitted(true)
  }

  return (
    <div className="container max-w-2xl py-12">
      <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
      
      {submitted ? (
        <div className="rounded-lg border p-6">
          <p className="text-lg">Thanks for reaching out! I'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" required />
          </div>
          
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
          </div>
          
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={6} required />
          </div>
          
          <Button type="submit" size="lg">Send Message</Button>
        </form>
      )}
    </div>
  )
}
