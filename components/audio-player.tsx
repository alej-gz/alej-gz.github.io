"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Music } from "lucide-react"

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)
  const animationRef = useRef<number | null>(null)

  const updateProgress = () => {
    if (audioRef.current) {
      const { currentTime, duration } = audioRef.current
      if (duration > 0) {
        setProgress((currentTime / duration) * 100)
      }
      animationRef.current = requestAnimationFrame(updateProgress)
    }
  }

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    } else {
      audioRef.current.play()
      animationRef.current = requestAnimationFrame(updateProgress)
    }
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleEnded = () => {
      setIsPlaying(false)
      setProgress(0)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }

    audio.addEventListener("ended", handleEnded)
    return () => {
      audio.removeEventListener("ended", handleEnded)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-card/95 backdrop-blur-md border border-border rounded-lg p-3 shadow-lg flex items-center gap-3 min-w-[200px]">
        <button
          onClick={togglePlay}
          className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity"
          aria-label={isPlaying ? "Pausar" : "Reproducir"}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4 ml-0.5" />
          )}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-1">
            <Music className="h-3 w-3 text-primary flex-shrink-0" />
            <span className="text-[10px] text-muted-foreground font-[var(--font-body)] uppercase tracking-wider truncate">
              now playing...
            </span>
          </div>
          <p className="text-xs font-serif italic text-foreground truncate">
            listening: garden
          </p>
          <div className="mt-1.5 h-1 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        src="https://alej-gz.github.io/garden.mp3"
        preload="none"
        crossOrigin="anonymous"
      />
    </div>
  )
}
