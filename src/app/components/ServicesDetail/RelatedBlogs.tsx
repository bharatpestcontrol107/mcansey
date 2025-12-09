import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import img1 from '../../../../public/images/ERP-Accounting-Software-Development-All-You-Need-To-Know.webp'
import img2 from '../../../../public/images/Build-an-ERP-System-2.webp'
import img3 from '../../../../public/images/Banner.webp'

interface BlogPost {
  id: number
  title: string
  imageUrl: StaticImageData
  link: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "ERP Accounting Software Development - All You Need To Know",
    imageUrl: img1,
    link: "#"
  },
  {
    id: 2,
    title: "ERP Software Integration: A Symphony of Efficiency and Growth",
    imageUrl: img2,
    link: "#"
  },
  {
    id: 3,
    title: "ERP Software Development Cost: Estimating Budget in 2024",
    imageUrl:img3,
    link: "#"
  }
]

export default function RelatedBlogs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-8">Related Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
        <Link href={post.link} className="inline-block mt-4 hover:text-blue-600 text-lg">
          <div key={post.id} className={`rounded-lg overflow-hidden border-2 border-zinc-100 `}>
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{post.title}</h3>
              
                Read more &gt;
            </div>
          </div>
        </Link>
        ))}
      </div>
    </div>
  )
}