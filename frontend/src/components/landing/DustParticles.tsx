"use client"

import { useReducedMotion } from "framer-motion"
import { useEffect, useRef } from "react"

interface Particle {
	x: number
	y: number
	size: number
	speedX: number
	speedY: number
	opacity: number
}

const PARTICLE_COUNT = 40
const MIN_SIZE = 0.5
const MAX_SIZE = 2
const MIN_SPEED = 0.05
const MAX_SPEED = 0.2
const MAX_OPACITY = 0.3
const PARALLAX_STRENGTH = 0.02

export default function DustParticles() {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const particles = useRef<Particle[]>([])
	const mousePosition = useRef({ x: 0, y: 0 })
	const shouldReduceMotion = useReducedMotion()

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext("2d")
		if (!ctx) return

		let animationFrameId: number

		const initParticles = () => {
			const { width, height } = canvas.getBoundingClientRect()
			canvas.width = width
			canvas.height = height

			particles.current = []
			for (let i = 0; i < PARTICLE_COUNT; i++) {
				particles.current.push({
					x: Math.random() * width,
					y: Math.random() * height,
					size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE,
					speedX: Math.random() * (MAX_SPEED - MIN_SPEED) + MIN_SPEED,
					speedY: Math.random() * (MAX_SPEED - MIN_SPEED) + MIN_SPEED,
					opacity: Math.random() * MAX_OPACITY,
				})
			}
		}

		const animate = () => {
			if (!ctx || !canvas) return

			ctx.clearRect(0, 0, canvas.width, canvas.height)

			particles.current.forEach((p) => {
				if (!shouldReduceMotion) {
					p.x += p.speedX
					p.y += p.speedY
				}

				const parallaxX = (mousePosition.current.x - canvas.width / 2) * PARALLAX_STRENGTH * (p.size / MAX_SIZE)
				const parallaxY = (mousePosition.current.y - canvas.height / 2) * PARALLAX_STRENGTH * (p.size / MAX_SIZE)

				const drawX = p.x + parallaxX
				const drawY = p.y + parallaxY

				ctx.beginPath()
				ctx.arc(drawX, drawY, p.size, 0, Math.PI * 2)
				ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`
				ctx.fill()

				if (p.x > canvas.width) p.x = 0
				if (p.y > canvas.height) p.y = 0
				if (p.x < 0) p.x = canvas.width
				if (p.y < 0) p.y = canvas.height
			})

			animationFrameId = requestAnimationFrame(animate)
		}

		const handleResize = () => {
			initParticles()
		}

		const handleMouseMove = (e: MouseEvent) => {
			mousePosition.current = { x: e.clientX, y: e.clientY }
		}

		window.addEventListener("resize", handleResize)
		window.addEventListener("mousemove", handleMouseMove)

		initParticles()
		animate()

		return () => {
			window.removeEventListener("resize", handleResize)
			window.removeEventListener("mousemove", handleMouseMove)
			cancelAnimationFrame(animationFrameId)
		}
	}, [shouldReduceMotion])

	return (
		<canvas
			ref={canvasRef}
			className="absolute inset-0 w-full h-full pointer-events-none"
			style={{ filter: "blur(0.5px)" }}
		/>
	)
}
