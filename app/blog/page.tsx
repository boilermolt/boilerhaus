import { getSubstackPosts } from '@/lib/substack'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const revalidate = 3600 // Revalidate every hour

export default async function BlogPage() {
  const feedUrl = process.env.NEXT_PUBLIC_SUBSTACK_FEED_URL
  const posts = feedUrl ? await getSubstackPosts(feedUrl, 20) : []

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      {posts.length === 0 ? (
        <p className="text-muted-foreground">
          No posts yet. Configure your Substack feed URL in .env.local
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.link}>
              <CardHeader>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription>
                  {new Date(post.pubDate).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-sm mb-4">{post.description}</p>
                <Button asChild variant="outline" size="sm">
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    Read on Substack →
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
