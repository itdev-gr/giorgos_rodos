import { useState, useRef, useEffect } from 'react';

interface Option {
  value: string;
  label: string;
}

interface NiceSelectProps {
  options: Option[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export default function NiceSelect({ options, defaultValue, onChange }: NiceSelectProps) {
  const [selected, setSelected] = useState(defaultValue || options[0].label);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="nice-select-wrapper">
      <div
        className={`nice-select ${isOpen ? 'open' : ''}`}
        ref={dropdownRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="current">{selected}</span>
        <ul className="list">
          {options.map((option, index) => (
            <li
              key={index}
              className="option"
              onClick={() => {
                setSelected(option.label);
                setIsOpen(false);
                onChange?.(option.value);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
