"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCallback, useState } from "react"
import ProjectCard, { Project } from "./ProjectCard"

interface ProjectCarouselProps {
	projects: Project[]
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [direction, setDirection] = useState(0)

	const nextSlide = useCallback(() => {
		setDirection(1)
		setCurrentIndex((prev) => (prev + 1) % projects.length)
	}, [projects.length])

	const prevSlide = useCallback(() => {
		setDirection(-1)
		setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
	}, [projects.length])

	const goToSlide = (index: number) => {
		setDirection(index > currentIndex ? 1 : -1)
		setCurrentIndex(index)
	}

	const variants = {
		enter: (direction: number) => ({
			x: direction > 0 ? 1000 : -1000,
			opacity: 0
		}),
		center: {
			zIndex: 1,
			x: 0,
			opacity: 1
		},
		exit: (direction: number) => ({
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0
		})
	}

	return (
		<div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 group">
			<div className="relative">
				<AnimatePresence initial={false} custom={direction} mode="wait">
					<motion.div
						key={currentIndex}
						custom={direction}
						variants={variants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{
							x: { type: "spring", stiffness: 300, damping: 30 },
							opacity: { duration: 0.2 }
						}}
						className="w-full"
					>
						<ProjectCard project={projects[currentIndex]} />
					</motion.div>
				</AnimatePresence>
			</div>

			<button
				onClick={prevSlide}
				className="absolute left-0 lg:-left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full border border-zinc-800 bg-neutral-900/50 backdrop-blur-md text-zinc-400 hover:text-white hover:border-zinc-600 transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
				aria-label="Previous project"
			>
				<ChevronLeft size={24} />
			</button>
			<button
				onClick={nextSlide}
				className="absolute right-0 lg:-right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full border border-zinc-800 bg-neutral-900/50 backdrop-blur-md text-zinc-400 hover:text-white hover:border-zinc-600 transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
				aria-label="Next project"
			>
				<ChevronRight size={24} />
			</button>

			<div className="flex justify-center gap-3 mt-12">
				{projects.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
							index === currentIndex 
								? "bg-blue-500 w-8" 
								: "bg-zinc-700 hover:bg-zinc-600"
						}`}
						aria-label={`Go to project ${index + 1}`}
					/>
				))}
			</div>
		</div>
	)
}
