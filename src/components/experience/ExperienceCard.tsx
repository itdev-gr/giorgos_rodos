import { imgUrl, imgSrcset } from '../../lib/media';

export interface ExperienceCardProps {
  href: string;
  title: string;
  description?: string;
  image: string;
  imageAlt?: string;
  badge?: string;
  price?: string;
  duration?: string;
  guests?: string;
  sizes?: string;
  className?: string;
}

export default function ExperienceCard({
  href,
  title,
  description = '',
  image,
  imageAlt,
  badge = '',
  price = '',
  duration = '',
  guests = '',
  sizes = '(max-width: 575px) min(320px, 100vw), (max-width: 991px) min(320px, 50vw), 33vw',
  className = '',
}: ExperienceCardProps) {
  const imgSrc = imgUrl(image, 700, { quality: 80 }) || image;
  const imgSet = imgSrcset(image, [480, 640, 700, 900]) || '';
  const showDurationMeta = Boolean(duration && duration !== badge);

  return (
    <a href={href} className={`exp-card home-exp-card ${className}`.trim()}>
      <div className="exp-card__media">
        <img
          src={imgSrc}
          srcSet={imgSet || undefined}
          sizes={sizes}
          alt={imageAlt || title}
          loading="lazy"
          width={700}
          height={875}
          decoding="async"
        />
      </div>
      <div className="exp-card__scrim" />

      {badge && <span className="exp-card__badge">{badge}</span>}

      {price && (
        <div className="exp-card__price">
          <span className="exp-card__price-current">{price}</span>
        </div>
      )}

      <div className="exp-card__body">
        <div className="exp-card__stars" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <i key={i} className="fas fa-star" />
          ))}
        </div>

        <h3 className="exp-card__title">{title}</h3>

        {description && <p className="exp-card__desc">{description}</p>}

        {(showDurationMeta || guests) && (
          <div className="exp-card__meta">
            {showDurationMeta && (
              <span>
                <i className="far fa-clock" /> {duration}
              </span>
            )}
            {guests && (
              <span>
                <i className="far fa-user" /> {guests}
              </span>
            )}
          </div>
        )}
      </div>
    </a>
  );
}
