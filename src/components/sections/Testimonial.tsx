'use client'

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    title: "From Image Tagging to Full CMS Migration",
    excerpt: "Protoweave initially came in to support image tagging within Adobe Experience Manager, but it quickly became clear their capabilities extend far beyond a single feature.",
    rest: " Their platform demonstrated a structured, scalable approach to content transformation - handling complex mappings, component alignment, and cross-CMS migration with minimal friction. What started as a targeted implementation evolved into a broader initiative, including Core CMS “Legacy CMS system” content migration into AEM. Protoweave brings real engineering depth and a practical understanding of enterprise content architectures, which significantly accelerated our delivery timeline.",
    author: "Michelle — Director, Product Management and QA, BBB",
    authorUrl: null,
  },
  {
    title: "AI-Powered Content Migration & Validation",
    excerpt: "Protoweave enabled us to streamline complex content migrations across multiple CMS platforms into a unified architecture. Their automation-driven approach, combined with AI-powered QA validation integrated with Jira, ensured data integrity and significantly reduced manual effort. The result was faster delivery with a high level of confidence in the migrated content.",
    rest: null,
    author: "Aptimized",
    authorUrl: "https://www.aptimized.com/",
  },
  {
    title: "Trusted Migration & AEM Transformation",
    excerpt: "Protoweave was quick to understand our website and recommend ways to seamlessly migrate content from our old CMS into AEM. They were easy to work with and had innovative ideas of how to streamline and simplify the process.",
    rest: null,
    author: "Sara — SEO Leader | Technical SEO, Structured Data & Site Migrations",
    authorUrl: null,
  },
]

const GAP = 32

function TestimonialCard({ title, excerpt, rest, author, authorUrl }: typeof testimonials[0]) {
  const [expanded, setExpanded] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  function collapse() {
    setExpanded(false)
    cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div
      ref={cardRef}
      className="h-full bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-3xl p-10 sm:p-14 border border-purple-100 dark:border-purple-900/40 flex flex-col"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-purple-500 mb-6">
        What Our Clients Say
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 leading-snug">
        {title}
      </h2>

      <blockquote className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-8 flex-1">
        &ldquo;{excerpt}
        {rest && !expanded && (
          <>
            {" "}
            <button
              onClick={() => setExpanded(true)}
              className="text-purple-600 dark:text-purple-400 font-medium hover:underline focus:outline-none"
            >
              ...Read more
            </button>
          </>
        )}
        {rest && (
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.span
                key="rest"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ overflow: "hidden", display: "block" }}
              >
                {rest}&rdquo;{" "}
                <button
                  onClick={collapse}
                  className="text-purple-600 dark:text-purple-400 font-medium hover:underline focus:outline-none"
                >
                  Show less
                </button>
              </motion.span>
            )}
          </AnimatePresence>
        )}
        {(!rest || !expanded) && <>&rdquo;</>}
      </blockquote>

      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
        {authorUrl ? (
          <a
            href={authorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            {author}
          </a>
        ) : author}
      </p>
    </div>
  )
}

export default function Testimonial() {
  const [index, setIndex] = useState(0)
  const [cardWidth, setCardWidth] = useState(0)
  const [perPage, setPerPage] = useState(2)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function measure() {
      const el = containerRef.current
      if (!el) return
      const pp = window.innerWidth >= 1024 ? 2 : 1
      const cw = (el.offsetWidth - GAP * (pp - 1)) / pp
      setPerPage(pp)
      setCardWidth(cw)
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - perPage)
  const prev = () => setIndex(i => Math.max(0, i - 1))
  const next = () => setIndex(i => Math.min(maxIndex, i + 1))
  const translateX = cardWidth > 0 ? -(index * (cardWidth + GAP)) : 0

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative px-12">
          <button
            onClick={prev}
            disabled={index === 0}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div ref={containerRef} className="overflow-hidden">
            <motion.div
              className="flex"
              style={{ gap: GAP }}
              animate={{ x: translateX }}
              transition={{ type: "tween", ease: [0.25, 0.46, 0.45, 0.94], duration: 0.4 }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  style={{ width: cardWidth > 0 ? cardWidth : undefined, flexShrink: 0 }}
                  className={cardWidth === 0 ? "w-full" : undefined}
                >
                  <TestimonialCard {...t} />
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={next}
            disabled={index >= maxIndex}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all ${
                i === index
                  ? "bg-purple-500 w-5"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-purple-300"
              }`}
            />
          ))}
        </div>
      </div>
  )
}

export default function Testimonial() {
  const [index, setIndex] = useState(0)
  const [cardWidth, setCardWidth] = useState(0)
  const [perPage, setPerPage] = useState(2)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function measure() {
      const el = containerRef.current
      if (!el) return
      const pp = window.innerWidth >= 1024 ? 2 : 1
      const cw = (el.offsetWidth - GAP * (pp - 1)) / pp
      setPerPage(pp)
      setCardWidth(cw)
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - perPage)
  const prev = () => setIndex(i => Math.max(0, i - 1))
  const next = () => setIndex(i => Math.min(maxIndex, i + 1))
  const translateX = cardWidth > 0 ? -(index * (cardWidth + GAP)) : 0

  return (
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative px-12">
            <button
                onClick={prev}
                disabled={index === 0}
                aria-label="Previous"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div ref={containerRef} className="overflow-hidden">
              <motion.div
                  className="flex"
                  style={{ gap: GAP }}
                  animate={{ x: translateX }}
                  transition={{ type: "tween", ease: [0.25, 0.46, 0.45, 0.94], duration: 0.4 }}
              >
                {testimonials.map((t, i) => (
                    <div
                        key={i}
                        style={{ width: cardWidth > 0 ? cardWidth : undefined, flexShrink: 0 }}
                        className={cardWidth === 0 ? "w-full" : undefined}
                    >
                      <TestimonialCard {...t} />
                    </div>
                ))}
              </motion.div>
            </div>

            <button
                onClick={next}
                disabled={index >= maxIndex}
                aria-label="Next"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`w-2 h-2 rounded-full transition-all ${
                        i === index
                            ? "bg-purple-500 w-5"
                            : "bg-gray-300 dark:bg-gray-600 hover:bg-purple-300"
                    }`}
                />
            ))}
          </div>
        </div>
      </section>
  )
}
