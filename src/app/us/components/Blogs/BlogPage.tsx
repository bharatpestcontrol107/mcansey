'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, NewspaperIcon } from "lucide-react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import Fuse from 'fuse.js'
interface BlogPost {
  title: string
  shortDescription: string
  featuredImage: string
  createdAt: string
  author: string
  slug: string
  category: string
  tags: string[]
}
export default function BlogPage() {
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([])
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const postsPerPage = 18
  useEffect(() => {
    const fetchBlogData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch('/api/posts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        if (!res.ok) {
          throw new Error('Failed to fetch data')
        }
        const data: BlogPost[] = await res.json()
        setRecentPosts(data)
        setFilteredPosts(data)
       
        const uniqueCategories = ['All', ...Array.from(new Set(data.map((post: BlogPost) => post.category)))]
        setCategories(uniqueCategories)
      } catch (error) {
        setError('Error fetching data')
      } finally {
        setIsLoading(false)
      }
    }
    fetchBlogData()
  }, [])
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (searchTerm.trim() === '') {
      setFilteredPosts(recentPosts)
    } else {
      const fuse = new Fuse(recentPosts, {
        keys: ['title', 'shortdescription', 'tags', 'category'],
        includeScore: true,
        threshold: 0.3,
      })
      const results = fuse.search(searchTerm).map(result => result.item)
      setFilteredPosts(results)
    }
    setCurrentPage(1)
  }
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    const getDateFromCreatedAt = (createdAt: any): Date => {
      if (typeof createdAt === 'string') {
        return new Date(createdAt)
      } else if (typeof createdAt === 'object' && createdAt.seconds) {
        return new Date(createdAt.seconds * 1000 + createdAt.nanoseconds / 1000000)
      } else {
        console.warn('Unexpected createdAt format:', createdAt)
        return new Date()
      }
    }
    const dateA = getDateFromCreatedAt(a.createdAt)
    const dateB = getDateFromCreatedAt(b.createdAt)
    const timeA = dateA.getTime()
    const timeB = dateB.getTime()
    if (isNaN(timeA) || isNaN(timeB)) {
      console.warn('Invalid date encountered:', a.createdAt, b.createdAt)
      return 0
    }
    return sortOrder === 'newest' ? timeB - timeA : timeA - timeB
  })
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value as 'newest' | 'oldest')
  }
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage)
  const paginatedPosts = sortedPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  )
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }
  const filterPosts = (search: string, category: string) => {
    let filtered = recentPosts
    if (category !== 'All') {
      filtered = filtered.filter(post => post.category === category)
    }
    if (search.trim() !== '') {
      const fuse = new Fuse(filtered, {
        keys: ['title', 'shortdescription', 'tags', 'category'],
        includeScore: true,
        threshold: 0.3,
      })
      filtered = fuse.search(search).map(result => result.item)
    }
    setFilteredPosts(filtered)
    setCurrentPage(1)
  }
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value
    setSelectedCategory(category)
    filterPosts(searchTerm, category)
  }
  if (isLoading) return (
    <>
      <BannerSkeleton />
      <div className="max-w-7xl mx-auto">
        <div className="px-5">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <BlogPostCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
  if (error) return <p>{error}</p>
  
  return (
    <>
      <div className="relative w-full h-96 mb-6">
        <Image
          src="../../assets/images/brandsPage/brands_banner.webp"
          alt="Blog Banner"
          title='Blog Background Image'
          layout="fill"
          objectFit="cover"
          className="rounded-b-xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Keep up with the updates</h2>
          <p className="md:text-xl mb-8">Discover the latest insights and stories</p>
          <form
            onSubmit={(e) => {
              handleSearch(e)
            }}
            className="w-full max-w-md "
          >
            <div className='relative flex items-center sm:items-start'>
              <Input
                type="search"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="flex-grow  md:p-6 text-black "
              />
              <Button
                type="submit"
                className="flex h-full absolute right-0 bg-white"
                aria-label="search"
              >
                <Search className="h-6 w-4 mr-1" />
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mb-6">
        <div className="px-5">
          <div className='flex flex-col-reverse md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:mb-8'>
            <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold mt-4 md:mt-0'>
              Our Blog
            </h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
              <div className="flex items-center w-full sm:w-auto justify-between">
                <label htmlFor="category" className="mr-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200">
                  Category:
                </label>
                <div className="relative inline-block w-full sm:w-auto">
                  <select
                    id="category"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="appearance-none w-full sm:w-auto bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-xs sm:text-sm text-gray-700 dark:text-gray-200 py-2 pl-4 pr-10 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex items-center w-full sm:w-auto justify-between">
                <label htmlFor="sort" className="mr-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200">
                  Sort&nbsp;By:
                </label>
                <div className="relative inline-block w-full sm:w-auto">
                  <select
                    id="sort"
                    value={sortOrder}
                    onChange={handleSortChange}
                    className="appearance-none w-full sm:w-auto bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-xs sm:text-sm text-gray-700 dark:text-gray-200 py-2 pl-4 pr-10 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {filteredPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {paginatedPosts.map((post) => (
                  <BlogPostCard key={post.slug} post={post} />
                ))}
              </div>
              <Pagination className="mt-8">
                <PaginationContent>
                  <PaginationItem>
                    {currentPage === 1 ? <></> : <PaginationPrevious
                      className="cursor-pointer"
                      onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    />}
                  </PaginationItem>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                    if (page <= 2 || page === currentPage || page === totalPages) {
                      return (
                        <PaginationItem key={page}>
                          <PaginationLink
                            className="cursor-pointer"
                            isActive={page === currentPage}
                            onClick={() => handlePageChange(page)}
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    } else if (page === 4 && currentPage > 4 && currentPage < totalPages - 1) {
                      return <PaginationItem key="ellipsis-start">...</PaginationItem>;
                    } else if (page === totalPages - 1 && currentPage < totalPages - 2) {
                      return <PaginationItem key="ellipsis-end">...</PaginationItem>;
                    }
                    return null;
                  })}
                  {/* Conditionally render the Next button */}
                  {currentPage < totalPages - 1 && (
                    <PaginationItem>
                      <PaginationNext
                        className="cursor-pointer"
                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                      />
                    </PaginationItem>
                  )}
                  {/* Always render the last page button */}
                </PaginationContent>
              </Pagination>
            </>
          ) : (
            <div className="text-center mt-20">
              <NewspaperIcon className="h-24 w-24 text-muted-foreground mb-4 mx-auto" />
              <h2 className="text-3xl font-extrabold">No blogs found</h2>
              <p className="mt-4 text-lg">Try adjusting your search.</p>
              <Button onClick={() => setFilteredPosts(recentPosts)} className="mt-4">
                Explore All Blogs
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
function BlogPostCard({ post }: { post: BlogPost }) {
  const formattedDate = formatDate(post.createdAt)
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative aspect-[16/9] w-full h-56 mb-5 rounded-lg overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={post.title}
            title={post.title}
            layout="fill"
            objectFit="contain"
            className="transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="font-semibold mb-3 text-gray-900 leading-tight">
          {post.title}
        </h3>
        <p className="text-gray-700 flex-grow mb-4 leading-relaxed line-clamp-3">
          {post.shortDescription}
        </p>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="mr-2">{formattedDate}</span>
          <span>&middot;</span>
          <span className="ml-2">{post.author}</span>
        </div>
      </Link>
    </div>
  )
}
function formatDate(createdAt: any): string {
  if (typeof createdAt === 'object' && createdAt.seconds) {
    const date = new Date(createdAt.seconds * 1000)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}-${month}-${year}`
  } else {
    console.warn('Invalid date format:', createdAt)
    return 'Invalid Date'
  }
}
function BannerSkeleton() {
  return (
    <div className="relative w-full h-96 mb-6">
      <div className="w-full h-full rounded-b-xl bg-gray-200 animate-pulse" />
      <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
        <div className="h-10 w-3/4 max-w-md mb-4 bg-gray-300 animate-pulse rounded" />
        <div className="h-6 w-1/2 max-w-sm mb-8 bg-gray-300 animate-pulse rounded"/>
        <div className="h-12 w-full max-w-md bg-gray-300 animate-pulse rounded" />
      </div>
    </div>
  )
}
function BlogPostCardSkeleton() {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md flex flex-col">
      <div className="w-full h-48 mb-4 rounded-lg bg-gray-200 animate-pulse" />
      <div className="h-6 w-3/4 mb-2 bg-gray-200 animate-pulse rounded" />
      <div className="h-4 w-1/4 mb-2 bg-gray-200 animate-pulse rounded" />
      <div className="h-4 w-full mb-2 bg-gray-200 animate-pulse rounded" />
      <div className="h-4 w-full bg-gray-200 animate-pulse rounded" />
    </div>
  )
}