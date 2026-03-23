import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface CounterItem {
  value: number;
  suffix: string;
  title: string;
}

interface CountUpSectionProps {
  counters: CounterItem[];
}

export default function CountUpSection({ counters }: CountUpSectionProps) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="row" ref={ref}>
      {counters.map((counter, index) => (
        <div key={index} className="col-sm-6 col-xl-3 counter-card-wrap">
          <div className="counter-card">
            <div className="counter-shape"><span></span></div>
            <div className="media-body">
              <h3 className="box-number">
                {inView && (
                  <CountUp start={0} end={counter.value} duration={2} delay={0} />
                )}
                {counter.suffix}
              </h3>
              <h6 className="counter-title">{counter.title}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
