import { trackCalendlyOpen } from '../lib/analytics';

const CALENDLY_URL = 'https://calendly.com/divyankaggarwal6/30min';

interface BookMeetingButtonProps {
  /** Where on the page the button lives, used for analytics. */
  location?: string;
  /** Override button label. Defaults to "Book a Meeting". */
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function BookMeetingButton({
  location = 'unknown',
  label = 'Book a Meeting',
  className = '',
  style,
}: BookMeetingButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackCalendlyOpen(location);
    // Calendly widget is loaded via the CDN script in index.html
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: CALENDLY_URL });
    }
  };

  return (
    <button onClick={handleClick} className={className} style={style} type="button">
      {label}
    </button>
  );
}
