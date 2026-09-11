'use client';

import { useState, useEffect, useCallback } from 'react';
import { programDetails, type ProgramDetail } from '@/lib/programs';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Layers3,
  ShieldCheck,
  TrendingUp,
  Cpu,
  MoveUpRight,
  Sparkles,
} from 'lucide-react';

const SLIDE_DURATION = 6000; // 6 seconds per slide

export default function ProgramSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const activeProgram: ProgramDetail = programDetails[currentIndex];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % programDetails.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + programDetails.length) % programDetails.length
    );
    setProgress(0);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  // Timer & Progress management
  useEffect(() => {
    if (!isPlaying) return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculatedProgress = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(calculatedProgress);

      if (elapsed >= SLIDE_DURATION) {
        nextSlide();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying, currentIndex, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const element = document.activeElement;
      const isInput =
        element?.tagName === 'INPUT' ||
        element?.tagName === 'TEXTAREA' ||
        element?.tagName === 'SELECT';
      if (isInput) return;

      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Swipe handlers for mobile
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const handlePathwaySelect = (title: string) => {
    const intakeElem = document.getElementById('intake');
    if (intakeElem) {
      intakeElem.scrollIntoView({ behavior: 'smooth' });
    }
    // Update select element if present
    const selectElem = document.getElementById('program') as HTMLSelectElement | null;
    if (selectElem) {
      selectElem.value = title;
      selectElem.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#c9ad75]" />;
      case 'Layers3':
        return <Layers3 className="w-5 h-5 text-[#c9ad75]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#c9ad75]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#c9ad75]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#c9ad75]" />;
      case 'MoveUpRight':
        return <MoveUpRight className="w-5 h-5 text-[#c9ad75]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#c9ad75]" />;
    }
  };

  return (
    <div className="slideshow-wrapper" onMouseEnter={() => setIsPlaying(false)} onMouseLeave={() => setIsPlaying(true)}>
      {/* Top Pathway Tabs Bar */}
      <div className="slideshow-tabs-bar">
        <div className="slideshow-tabs-track">
          {programDetails.map((prog, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={prog.id}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`slideshow-tab-item ${isActive ? 'active' : ''}`}
                aria-label={`Go to slide ${prog.number} ${prog.title}`}
              >
                <span className="tab-num">{prog.number}</span>
                <span className="tab-title">{prog.shortTitle}</span>
                {isActive && <div className="tab-indicator-glow" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Slide Progress Timer Line */}
      <div className="slideshow-progress-container" aria-hidden="true">
        <div
          className="slideshow-progress-bar"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Main Slide Deck Showcase */}
      <div
        className="slideshow-main-card"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="slideshow-content-grid">
          {/* Left Hero Column */}
          <div className="slideshow-hero-col">
            <div className="slideshow-meta-top">
              <span className="slideshow-count-badge">
                {activeProgram.number} <em>/ 06 PATHWAY</em>
              </span>
              <span className="slideshow-tagline">{activeProgram.tagline}</span>
            </div>

            <div className="slideshow-heading-group">
              <div className="slideshow-title-row">
                <div className="slideshow-icon-box">
                  {getProgramIcon(activeProgram.iconName)}
                </div>
                <h2>{activeProgram.title}</h2>
              </div>
              <p className="slideshow-desc">{activeProgram.description}</p>
            </div>

            <div className="slideshow-pills-row">
              <div className="slideshow-pill">
                <span className="pill-label">STAGE</span>
                <span className="pill-val">{activeProgram.stage}</span>
              </div>
              <div className="slideshow-pill">
                <span className="pill-label">TYPICAL CAPITAL</span>
                <span className="pill-val">{activeProgram.typicalRange}</span>
              </div>
            </div>

            <div className="slideshow-highlights">
              <h4>Key Strategic Focus</h4>
              <ul>
                {activeProgram.highlights.map((item, i) => (
                  <li key={i}>
                    <CheckCircle2 className="w-4 h-4 text-[#c9ad75] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="slideshow-actions">
              <a
                href={`/?program=${encodeURIComponent(activeProgram.title)}#intake`}
                onClick={() => handlePathwaySelect(activeProgram.title)}
                className="slideshow-cta-button"
              >
                <span>Select {activeProgram.title}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="slideshow-best-for-box">
                <span className="best-for-title">IDEAL FIT</span>
                <p>{activeProgram.bestFor}</p>
              </div>
            </div>
          </div>

          {/* Right Preview Card & Quick Deck Navigation */}
          <div className="slideshow-preview-col">
            <div className="slideshow-deck-preview-card">
              <div className="preview-card-header">
                <span className="preview-eyebrow">PATHWAY OVERVIEW</span>
                <span className="preview-num">{activeProgram.number}</span>
              </div>

              <div className="preview-card-body">
                <h3>{activeProgram.title}</h3>
                <p className="preview-tagline">{activeProgram.tagline}</p>
                <div className="preview-divider" />
                <div className="preview-metric">
                  <span>Target Alignment</span>
                  <strong>{activeProgram.stage}</strong>
                </div>
                <div className="preview-metric">
                  <span>Funding Range</span>
                  <strong>{activeProgram.typicalRange}</strong>
                </div>
              </div>

              <div className="preview-card-footer">
                <div className="deck-nav-teaser">
                  <span>NEXT UP</span>
                  <strong>
                    {programDetails[(currentIndex + 1) % programDetails.length].title}
                  </strong>
                </div>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="teaser-arrow-btn"
                  title="Next Slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Deck Indicator Controls */}
            <div className="slideshow-controls-bar">
              <div className="controls-left">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="control-icon-btn"
                  title={isPlaying ? 'Pause auto-play' : 'Start auto-play'}
                  aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
                <span className="controls-status-text">
                  {isPlaying ? 'Auto-advancing' : 'Paused'}
                </span>
              </div>

              <div className="controls-dots">
                {programDetails.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goToSlide(i)}
                    className={`control-dot ${i === currentIndex ? 'active' : ''}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <div className="controls-arrows">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="control-nav-btn"
                  aria-label="Previous pathway"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="control-nav-btn"
                  aria-label="Next pathway"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
