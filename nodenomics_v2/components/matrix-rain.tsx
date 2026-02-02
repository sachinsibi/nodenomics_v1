"use client"

import { useEffect, useRef } from "react"

interface MatrixRainProps {
    opacity?: number
    speed?: number
    density?: number
}

export function MatrixRain({ opacity = 0.4, speed = 1, density = 0.7 }: MatrixRainProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Matrix characters - mix of katakana, numbers, and symbols
        const matrixChars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*()+=<>?"

        let width = window.innerWidth
        let height = window.innerHeight

        canvas.width = width
        canvas.height = height

        const fontSize = 14
        const columns = Math.floor(width / fontSize)

        // Array to track the y position of each column's drop
        const drops: number[] = []
        // Array to track the speed variation of each column
        const speeds: number[] = []
        // Array to track brightness/opacity of each column
        const brightness: number[] = []

        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100 // Start above screen at random positions
            speeds[i] = 0.5 + Math.random() * 1.5 // Random speed between 0.5 and 2
            brightness[i] = 0.6 + Math.random() * 0.4 // Random brightness - higher base
        }

        const draw = () => {
            // Semi-transparent black to create fade trail effect
            ctx.fillStyle = `rgba(10, 10, 10, 0.05)`
            ctx.fillRect(0, 0, width, height)

            ctx.font = `${fontSize}px monospace`

            for (let i = 0; i < drops.length; i++) {
                // Random character
                const char = matrixChars[Math.floor(Math.random() * matrixChars.length)]

                const x = i * fontSize
                const y = drops[i] * fontSize

                // Create gradient effect - brighter at the head
                const headBrightness = brightness[i]

                // Draw the character with teal color (matching theme)
                // Head of the rain (brightest)
                ctx.fillStyle = `rgba(20, 184, 166, ${headBrightness})`
                ctx.fillText(char, x, y)

                // Frequent bright flash at the head for more visibility
                if (Math.random() > 0.92) {
                    ctx.fillStyle = `rgba(94, 234, 212, 1)`
                    ctx.fillText(char, x, y)
                    // Add glow effect
                    ctx.shadowColor = 'rgba(94, 234, 212, 0.8)'
                    ctx.shadowBlur = 10
                    ctx.fillText(char, x, y)
                    ctx.shadowBlur = 0
                }

                // Move the drop down based on its speed
                drops[i] += speeds[i] * speed * 0.3

                // Reset drop to top with some randomness when it goes off screen
                if (y > height && Math.random() > 0.975) {
                    drops[i] = 0
                    speeds[i] = 0.5 + Math.random() * 1.5
                    brightness[i] = 0.3 + Math.random() * 0.7
                }
            }
        }

        // Reduced frame rate for smoother, less seizure-inducing animation
        const intervalId = setInterval(draw, 50) // ~20fps instead of 60fps

        const handleResize = () => {
            width = window.innerWidth
            height = window.innerHeight
            canvas.width = width
            canvas.height = height
        }

        window.addEventListener("resize", handleResize)

        return () => {
            clearInterval(intervalId)
            window.removeEventListener("resize", handleResize)
        }
    }, [opacity, speed, density])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity }}
        />
    )
}
