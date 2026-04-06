interface StatusBadgeProps {
  status: string;
}

const statusStyles: Record<string, { bg: string; color: string }> = {
  pending: { bg: '#FEF3C7', color: '#92400E' },
  approved: { bg: '#D1FAE5', color: '#065F46' },
  confirmed: { bg: '#D1FAE5', color: '#065F46' },
  rejected: { bg: '#FEE2E2', color: '#991B1B' },
  cancelled: { bg: '#FEE2E2', color: '#991B1B' },
  draft: { bg: '#E5E7EB', color: '#374151' },
  active: { bg: '#DBEAFE', color: '#1E40AF' },
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const style = statusStyles[status] || statusStyles.draft;
  return (
    <span style={{
      display: 'inline-block', padding: '3px 10px', borderRadius: 20,
      fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase',
      letterSpacing: 0.5, background: style.bg, color: style.color,
    }}>
      {status}
    </span>
  );
}
