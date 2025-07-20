import React, { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, SkipBack, SkipForward } from 'lucide-react'
import styles from './VideoPlayer.module.css'
import motion from '@img/motion.mp4' 


const VideoPlayer = () => {
  const videoRef = useRef(null)
  const progressRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Sample video URL - replace with your video source
  const videoSrc = '/src/assets/images/motion.mp4'

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateTime = () => setCurrentTime(video.currentTime)
    const updateDuration = () => setDuration(video.duration)

    video.addEventListener('timeupdate', updateTime)
    video.addEventListener('loadedmetadata', updateDuration)
    video.addEventListener('ended', () => setIsPlaying(false))

    return () => {
      video.removeEventListener('timeupdate', updateTime)
      video.removeEventListener('loadedmetadata', updateDuration)
      video.removeEventListener('ended', () => setIsPlaying(false))
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleProgressClick = (e) => {
    const video = videoRef.current
    const progressBar = progressRef.current
    const rect = progressBar.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const newTime = (clickX / rect.width) * duration
    video.currentTime = newTime
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    videoRef.current.volume = newVolume
    setIsMuted(newVolume === 0)
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (isMuted) {
      video.volume = volume
      setIsMuted(false)
    } else {
      video.volume = 0
      setIsMuted(true)
    }
  }

  const skip = (seconds) => {
    const video = videoRef.current
    video.currentTime = Math.max(0, Math.min(duration, video.currentTime + seconds))
  }

  const restart = () => {
    const video = videoRef.current
    video.currentTime = 0
    setCurrentTime(0)
  }

  const toggleFullscreen = () => {
    const video = videoRef.current
    if (!isFullscreen) {
      if (video.requestFullscreen) {
        video.requestFullscreen()
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen()
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen()
      }
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
      setIsFullscreen(false)
    }
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (

      <div
        className={styles.videoWrapper}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        {/* Video Element */}
        <video
          ref={videoRef}
          className={styles.video}
          src={videoSrc}
          poster="https://via.placeholder.com/800x450/1f2937/ffffff?text=Video+Player"
          onClick={togglePlay}
        />

        {/* Custom Controls Overlay */}
        <div className={`${styles.controlsOverlay} ${showControls ? styles.visible : styles.hidden}`}>
          {/* Progress Bar */}
          <div
            ref={progressRef}
            className={styles.progressBar}
            onClick={handleProgressClick}
          >
            <div
              className={styles.progressFill}
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </div>

          {/* Control Buttons */}
          <div className={styles.controlsContainer}>
            <div className={styles.leftControls}>
              {/* Play/Pause */}
              <button
                onClick={togglePlay}
                className={styles.controlButton}
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>

              {/* Skip Backward */}
              <button
                onClick={() => skip(-10)}
                className={styles.controlButton}
              >
                <SkipBack size={20} />
              </button>

              {/* Skip Forward */}
              <button
                onClick={() => skip(10)}
                className={styles.controlButton}
              >
                <SkipForward size={20} />
              </button>

              {/* Restart */}
              <button
                onClick={restart}
                className={styles.controlButton}
              >
                <RotateCcw size={20} />
              </button>

              {/* Time Display */}
              <span className={styles.timeDisplay}>
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className={styles.rightControls}>
              {/* Volume Controls */}
              <div className={styles.volumeControls}>
                <button
                  onClick={toggleMute}
                  className={styles.controlButton}
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className={styles.volumeSlider}
                />
              </div>

              {/* Fullscreen */}
              <button
                onClick={toggleFullscreen}
                className={styles.controlButton}
              >
                <Maximize size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    
 
  )
}

export default VideoPlayer