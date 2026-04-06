import { useState } from 'react';

interface Booking {
  id: string;
  customer_name: string;
  customer_email: string;
  booking_date: string;
  guests: number;
  status: string;
  tours?: { title: string };
}

interface BookingCalendarProps {
  bookings: Booking[];
}

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function BookingCalendar({ bookings }: BookingCalendarProps) {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Build booking map: date string → bookings[]
  const bookingMap: Record<string, Booking[]> = {};
  bookings.forEach(b => {
    if (!bookingMap[b.booking_date]) bookingMap[b.booking_date] = [];
    bookingMap[b.booking_date].push(b);
  });

  // Calendar grid
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDayOfWeek = (firstDay.getDay() + 6) % 7; // Monday = 0
  const daysInMonth = lastDay.getDate();

  const cells: (number | null)[] = [];
  for (let i = 0; i < startDayOfWeek; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const formatDate = (d: number) => {
    const m = String(month + 1).padStart(2, '0');
    const day = String(d).padStart(2, '0');
    return `${year}-${m}-${day}`;
  };

  const isToday = (d: number) => {
    return d === today.getDate() && month === today.getMonth() && year === today.getFullYear();
  };

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(year - 1); }
    else setMonth(month - 1);
    setSelectedDate(null);
  };

  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(year + 1); }
    else setMonth(month + 1);
    setSelectedDate(null);
  };

  const selectedBookings = selectedDate ? (bookingMap[selectedDate] || []) : [];

  return (
    <div>
      {/* Calendar */}
      <div style={{ background: '#fff', borderRadius: 14, padding: 24, boxShadow: '0 1px 3px rgba(0,0,0,0.06)', marginBottom: 24 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <button onClick={prevMonth} style={{ width: 36, height: 36, borderRadius: 8, border: '1px solid #e2e8f0', background: '#fff', cursor: 'pointer', fontSize: '0.85rem', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className="fas fa-chevron-left" />
          </button>
          <h2 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.15rem', fontWeight: 700, color: '#113D48', margin: 0 }}>
            {MONTHS[month]} {year}
          </h2>
          <button onClick={nextMonth} style={{ width: 36, height: 36, borderRadius: 8, border: '1px solid #e2e8f0', background: '#fff', cursor: 'pointer', fontSize: '0.85rem', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className="fas fa-chevron-right" />
          </button>
        </div>

        {/* Day headers */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2, marginBottom: 4 }}>
          {DAYS.map(d => (
            <div key={d} style={{ textAlign: 'center', fontSize: '0.72rem', fontWeight: 600, color: '#94a3b8', padding: '8px 0', textTransform: 'uppercase', letterSpacing: 0.5 }}>
              {d}
            </div>
          ))}
        </div>

        {/* Days grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2 }}>
          {cells.map((day, i) => {
            if (day === null) return <div key={`empty-${i}`} style={{ padding: 8 }} />;
            const dateStr = formatDate(day);
            const dayBookings = bookingMap[dateStr] || [];
            const hasConfirmed = dayBookings.some(b => b.status === 'confirmed');
            const hasPending = dayBookings.some(b => b.status === 'pending');
            const isSelected = selectedDate === dateStr;

            return (
              <button
                key={dateStr}
                onClick={() => setSelectedDate(isSelected ? null : dateStr)}
                style={{
                  padding: '10px 4px', border: 'none', borderRadius: 8,
                  background: isSelected ? '#113D48' : isToday(day) ? '#f0f9ff' : 'transparent',
                  cursor: 'pointer', textAlign: 'center', transition: 'all 0.15s',
                  outline: isToday(day) && !isSelected ? '2px solid #1CA8CB' : 'none',
                }}
              >
                <span style={{
                  fontSize: '0.88rem', fontWeight: isToday(day) ? 700 : 400,
                  color: isSelected ? '#fff' : isToday(day) ? '#1CA8CB' : '#334155',
                }}>
                  {day}
                </span>
                {dayBookings.length > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'center', gap: 3, marginTop: 4 }}>
                    {hasConfirmed && <span style={{ width: 6, height: 6, borderRadius: '50%', background: isSelected ? '#fff' : '#10B981' }} />}
                    {hasPending && <span style={{ width: 6, height: 6, borderRadius: '50%', background: isSelected ? '#fff' : '#F59E0B' }} />}
                    {dayBookings.length > 1 && (
                      <span style={{ fontSize: '0.6rem', color: isSelected ? '#fff' : '#94a3b8', fontWeight: 600 }}>+{dayBookings.length}</span>
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', gap: 16, marginTop: 16, paddingTop: 14, borderTop: '1px solid #f1f5f9', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.75rem', color: '#64748b' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981' }} /> Confirmed
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.75rem', color: '#64748b' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#F59E0B' }} /> Pending
          </div>
        </div>
      </div>

      {/* Selected Date Details */}
      {selectedDate && (
        <div style={{ background: '#fff', borderRadius: 14, padding: 24, boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <h3 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#113D48', margin: '0 0 16px' }}>
            Bookings for {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
          </h3>
          {selectedBookings.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {selectedBookings.map(b => (
                <div key={b.id} style={{
                  padding: '14px 18px', borderRadius: 10, border: '1px solid #e2e8f0',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
                }}>
                  <div>
                    <p style={{ fontWeight: 600, color: '#113D48', margin: '0 0 2px', fontSize: '0.9rem' }}>{b.customer_name}</p>
                    <p style={{ fontSize: '0.78rem', color: '#64748b', margin: 0 }}>
                      {b.tours?.title} · {b.guests} guest{b.guests !== 1 ? 's' : ''} · <a href={`mailto:${b.customer_email}`} style={{ color: '#1CA8CB', textDecoration: 'none' }}>{b.customer_email}</a>
                    </p>
                  </div>
                  <span style={{
                    padding: '3px 10px', borderRadius: 20, fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase',
                    background: b.status === 'confirmed' ? '#D1FAE5' : b.status === 'pending' ? '#FEF3C7' : '#FEE2E2',
                    color: b.status === 'confirmed' ? '#065F46' : b.status === 'pending' ? '#92400E' : '#991B1B',
                  }}>{b.status}</span>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', textAlign: 'center', padding: 20 }}>No bookings on this date</p>
          )}
        </div>
      )}
    </div>
  );
}
