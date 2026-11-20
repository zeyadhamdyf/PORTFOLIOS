import useTypewriter from '../hooks/useTypewriter.js';
import { useTheme } from '../hooks/useTheme.jsx';

export default function Typewriter({ phrases, className = '' }) {
  const text = useTypewriter(phrases);
  const { isDark } = useTheme();
  const longest = phrases && phrases.length ? phrases.reduce((a, b) => (a.length > b.length ? a : b), '') : '';

  return (
    <span className={`relative inline-block ${className}`} aria-label={phrases ? phrases[0] : ''}>
      <span className="invisible select-none" aria-hidden>
        {longest}
        <span className="opacity-0">|</span>
      </span>
      <span className="absolute inset-y-0 start-0 whitespace-nowrap flex items-center" aria-hidden>
        <span>{text}</span>
        <span
          className="inline-block w-[2px] h-[1em] ms-1 animate-pulse"
          style={{
            backgroundColor: isDark ? '#F5D77A' : '#2588D8',
          }}
        />
      </span>
    </span>
  );
}
