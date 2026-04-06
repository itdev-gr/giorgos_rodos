interface StatsCardProps {
  title: string;
  value: string | number;
  icon: string;
  color?: string;
}

export default function StatsCard({ title, value, icon, color = '#1CA8CB' }: StatsCardProps) {
  return (
    <div style={{
      background: '#fff', borderRadius: 12, padding: '24px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
      display: 'flex', alignItems: 'center', gap: 16,
    }}>
      <div style={{
        width: 48, height: 48, borderRadius: 12,
        background: `${color}15`, color,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.2rem', flexShrink: 0,
      }}>
        <i className={icon} />
      </div>
      <div>
        <p style={{ fontSize: '0.8rem', color: '#6b7c85', marginBottom: 4 }}>{title}</p>
        <p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#113D48', fontFamily: 'Manrope, sans-serif', margin: 0 }}>{value}</p>
      </div>
    </div>
  );
}
