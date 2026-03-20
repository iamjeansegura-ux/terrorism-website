type IconProps = {
  className?: string;
};

export function CompassIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M14.8 9.2 13 13l-3.8 1.8L11 11l3.8-1.8Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 3 5 6v5c0 4.8 2.9 7.8 7 10 4.1-2.2 7-5.2 7-10V6l-7-3Z" />
      <path d="m9.5 12 1.8 1.8 3.5-4" />
    </svg>
  );
}

export function BookIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M4.5 5.5A2.5 2.5 0 0 1 7 3h12.5v15.5H7A2.5 2.5 0 0 0 4.5 21V5.5Z" />
      <path d="M7 3v15.5A2.5 2.5 0 0 0 9.5 21H20" />
      <path d="M9.5 7H16" />
      <path d="M9.5 11H16" />
    </svg>
  );
}

export function PeopleIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M16.5 20a4.5 4.5 0 0 0-9 0" />
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M20 18a3.5 3.5 0 0 0-3-3.5" />
      <path d="M17 5.5a3 3 0 1 1 0 6" />
      <path d="M4 18a3.5 3.5 0 0 1 3-3.5" />
      <path d="M7 5.5a3 3 0 1 0 0 6" />
    </svg>
  );
}

export function WarningIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 4 3.5 19h17L12 4Z" />
      <path d="M12 9v4.5" />
      <circle cx="12" cy="16.5" r=".8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function NetworkIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="5" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M12 7v4" />
      <path d="m10.5 12-3 4" />
      <path d="m13.5 12 3 4" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="m5 12.5 4.2 4.2L19 7.4" />
    </svg>
  );
}
