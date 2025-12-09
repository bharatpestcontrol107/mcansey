'use client'

import { useState } from 'react'

import { ArrowUpRight } from 'lucide-react'
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';


export interface Project {
    id: number;
    title: string;
    image: StaticImageData;
    url: string;
  }
  

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="relative aspect-[4/3] overflow-hidden  rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={project.image}
        alt={project.title}
        className="h-full w-full hover:scale-105  transfrom transition-all  object-cover  duration-300 ease-in-out"
      />
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-300">
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm rounded-full bg-white px-6 py-2 font-medium text-black transition-transform hover:scale-105"
          >
            View Site
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  )
}

