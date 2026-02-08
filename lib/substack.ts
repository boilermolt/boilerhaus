export interface SubstackPost {
  title: string
  link: string
  pubDate: string
  description: string
  content: string
}

export async function getSubstackPosts(
  feedUrl: string,
  limit = 10
): Promise<SubstackPost[]> {
  try {
    const response = await fetch(feedUrl, { next: { revalidate: 3600 } })
    const xml = await response.text()
    
    // Simple XML parsing - in production, use a proper XML parser
    const items = xml.match(/<item>[\s\S]*?<\/item>/g) || []
    
    return items.slice(0, limit).map((item) => ({
      title: (item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) || [])[1] || '',
      link: (item.match(/<link>(.*?)<\/link>/) || [])[1] || '',
      pubDate: (item.match(/<pubDate>(.*?)<\/pubDate>/) || [])[1] || '',
      description: (item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/) || [])[1] || '',
      content: (item.match(/<content:encoded><!\[CDATA\[(.*?)\]\]><\/content:encoded>/) || [])[1] || '',
    }))
  } catch (error) {
    console.error('Failed to fetch Substack posts:', error)
    return []
  }
}
