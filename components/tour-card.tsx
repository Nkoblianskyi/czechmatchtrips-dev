import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react'
import { type Tour, getCategoryColor } from '@/lib/tours-data'

interface TourCardProps {
  tour: Tour
  variant?: 'default' | 'featured'
}

export default function TourCard({ tour, variant = 'default' }: TourCardProps) {
  const color = getCategoryColor(tour.category)
  const isFeatured = variant === 'featured'

  const formattedDate = new Date(tour.startDate).toLocaleDateString('cs-CZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <Link
      href={`/zájezdy/${tour.slug}`}
      className={`tour-card group block bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors duration-300 ${isFeatured ? 'h-full' : ''}`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${isFeatured ? 'h-52' : 'h-44'}`}>
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />

        {/* Category badge */}
        <div
          className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest"
          style={{ backgroundColor: color, color: '#0d0d1a' }}
        >
          {tour.categoryLabel}
        </div>

        {/* Difficulty */}
        <div className="absolute top-3 right-3 px-2 py-1 bg-background/80 backdrop-blur-sm text-[10px] font-semibold text-foreground uppercase tracking-wider">
          {tour.difficulty}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className={`font-black text-foreground mb-1 text-balance leading-tight ${isFeatured ? 'text-xl' : 'text-lg'}`}>
          {tour.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 leading-relaxed line-clamp-2">
          {tour.description}
        </p>

        <div className="flex flex-col gap-1.5 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-primary flex-shrink-0" />
            <span className="truncate">{tour.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3 text-primary flex-shrink-0" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-primary flex-shrink-0" />
            <span>{tour.duration}</span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            max. {tour.maxParticipants} osob
          </span>
          <span className="flex items-center gap-1 text-primary text-xs font-bold uppercase tracking-wider group-hover:gap-2 transition-all">
            Detail <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  )
}
