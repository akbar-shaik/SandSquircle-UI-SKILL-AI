import React, { useState } from 'react';

// ============================================================================
// SandSquircle UI — Atomic Style Primitives & Component Recipes
//
// NOTE FOR AI AGENTS:
// Extract and use these atomic style primitives (Buttons, Cards, Badges, Links,
// Inputs, Icons) to build CUSTOM layouts for each application brief.
// DO NOT copy the compound money-manager layout for unrelated apps.
// ============================================================================

// ============================================================================
// 1. BUTTON STYLE SUITE (Pillar 1)
// ============================================================================

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'teal' | 'ghost' | 'iconCircle' | 'fab';
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

export const SandSquircleButton: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  icon,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-bold font-sans transition-all select-none cursor-pointer';

  switch (variant) {
    case 'primary':
      return (
        <button
          className={`${baseClasses} w-full bg-charcoal-900 text-sand-50 rounded-2xl py-3.5 px-5 text-sm shadow-md hover:bg-charcoal-800 active:scale-[0.98] gap-2 ${className}`}
          {...props}
        >
          {icon}
          {children}
        </button>
      );
    case 'teal':
      return (
        <button
          className={`${baseClasses} bg-teal-600 hover:bg-teal-700 text-white rounded-2xl py-3 px-4 text-sm shadow-sm active:scale-[0.98] gap-2 ${className}`}
          {...props}
        >
          {icon}
          {children}
        </button>
      );
    case 'ghost':
      return (
        <button
          className={`${baseClasses} text-charcoal-700 hover:text-charcoal-900 px-3.5 py-2 rounded-xl text-xs hover:bg-sand-200/60 active:scale-[0.98] gap-1.5 ${className}`}
          {...props}
        >
          {icon}
          {children}
        </button>
      );
    case 'iconCircle':
      return (
        <button
          className={`${baseClasses} w-10 h-10 rounded-full bg-white shadow-soft-card border border-black/[0.04] text-charcoal-700 hover:text-charcoal-900 hover:shadow-soft-card-hover active:scale-95 ${className}`}
          {...props}
        >
          {icon || children}
        </button>
      );
    case 'fab':
      return (
        <button
          className={`${baseClasses} w-12 h-12 rounded-full bg-charcoal-900 text-white shadow-elevated-fab ring-4 ring-sand-100 hover:scale-105 active:scale-95 ${className}`}
          {...props}
        >
          {icon || children}
        </button>
      );
    default:
      return null;
  }
};

// ============================================================================
// 2. CARD STYLE SUITE (Pillar 4)
// ============================================================================

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'standard' | 'darkHero' | 'mini' | 'row' | 'modal';
  children: React.ReactNode;
}

export const SandSquircleCard: React.FC<CardProps> = ({
  variant = 'standard',
  children,
  className = '',
  ...props
}) => {
  switch (variant) {
    case 'standard':
      // 26px Squircle Primary White Card
      return (
        <div
          className={`bg-white rounded-[26px] p-6 shadow-soft-card border border-black/[0.03] transition-all hover:shadow-soft-card-hover ${className}`}
          {...props}
        >
          {children}
        </div>
      );
    case 'darkHero':
      // 28px Squircle Charcoal Gradient Card
      return (
        <div
          className={`bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-[#0A0E17] text-white rounded-[28px] p-6 shadow-xl border border-white/10 relative overflow-hidden ${className}`}
          {...props}
        >
          {children}
        </div>
      );
    case 'mini':
      // 22px Squircle Sub-Card
      return (
        <div
          className={`bg-white/80 rounded-[22px] p-4 border border-sand-300 ${className}`}
          {...props}
        >
          {children}
        </div>
      );
    case 'row':
      // 16px Squircle Row Container
      return (
        <div
          className={`bg-white rounded-2xl p-4 shadow-soft-card border border-black/[0.03] transition-all hover:shadow-soft-card-hover active:scale-[0.99] ${className}`}
          {...props}
        >
          {children}
        </div>
      );
    case 'modal':
      // 32px Squircle Modal / Bottom Sheet
      return (
        <div
          className={`bg-white rounded-t-[32px] sm:rounded-[32px] p-6 shadow-modal-sheet border border-black/[0.04] ${className}`}
          {...props}
        >
          {children}
        </div>
      );
    default:
      return null;
  }
};

// ============================================================================
// 3. SUBTLE UI COMPONENTS (Pillar 5)
// ============================================================================

// Status Badge with 6px Dot
export type StatusBadgeType = 'positive' | 'negative' | 'warning' | 'neutral';

export interface StatusBadgeProps {
  status?: StatusBadgeType;
  label: string;
}

export const SandSquircleStatusBadge: React.FC<StatusBadgeProps> = ({
  status = 'positive',
  label,
}) => {
  const configs = {
    positive: {
      text: 'text-emeraldMint-text',
      bg: 'bg-emeraldMint-bg',
      border: 'border-emeraldMint-border',
      dot: 'bg-emeraldMint-text',
    },
    negative: {
      text: 'text-crimsonCoral-text',
      bg: 'bg-crimsonCoral-bg',
      border: 'border-crimsonCoral-border',
      dot: 'bg-crimsonCoral-text',
    },
    warning: {
      text: 'text-amberSand-text',
      bg: 'bg-amberSand-bg',
      border: 'border-amberSand-border',
      dot: 'bg-amberSand-text',
    },
    neutral: {
      text: 'text-charcoal-700',
      bg: 'bg-charcoal-100',
      border: 'border-charcoal-200',
      dot: 'bg-charcoal-500',
    },
  };

  const c = configs[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border ${c.text} ${c.bg} ${c.border}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      {label}
    </span>
  );
};

// 22% Squircle Brand / Category Icon Container
export const SandSquircleSquircleIcon: React.FC<{
  children: React.ReactNode;
  bg?: string;
  size?: string;
}> = ({ children, bg = 'bg-charcoal-900', size = 'w-11 h-11' }) => {
  return (
    <div
      className={`${size} ${bg} rounded-[22%] flex items-center justify-center flex-shrink-0 shadow-sm transition-transform active:scale-95`}
    >
      {children}
    </div>
  );
};

// Underline-Offset Text Link
export const SandSquircleLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <a
      className={`text-teal-600 hover:text-teal-700 font-semibold underline-offset-4 hover:underline transition-colors text-xs ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

// Form Input (Sand-50 Background, Sand-300 Border, Charcoal Focus)
export const SandSquircleInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className = '',
  ...props
}) => {
  return (
    <input
      className={`w-full bg-sand-50 border border-sand-300 rounded-2xl px-4 py-3 text-sm text-charcoal-900 outline-none focus:ring-2 focus:ring-charcoal-900 focus:bg-white transition-all placeholder:text-charcoal-400 ${className}`}
      {...props}
    />
  );
};

// Segmented Pill Control (12px Rounded-XL Track)
export interface SegmentedOption {
  key: string;
  label: string;
}

export const SandSquircleSegmentedControl: React.FC<{
  options: SegmentedOption[];
  activeKey: string;
  onChange: (key: string) => void;
}> = ({ options, activeKey, onChange }) => {
  return (
    <div className="w-full bg-sand-200/80 p-1 rounded-xl flex items-center gap-1 select-none">
      {options.map((opt) => {
        const isActive = activeKey === opt.key;
        return (
          <button
            key={opt.key}
            type="button"
            onClick={() => onChange(opt.key)}
            className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
              isActive
                ? 'text-charcoal-900 bg-white shadow-sm'
                : 'text-charcoal-500 hover:text-charcoal-900'
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};

// 32px Squircle Modal / Bottom Sheet Component
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const SandSquircleModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Blurred Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-charcoal-900/40 backdrop-blur-sm transition-opacity"
      />

      {/* Sheet Shell (32px squircle) */}
      <div className="relative w-full max-w-lg bg-white rounded-t-[32px] sm:rounded-[32px] p-6 shadow-modal-sheet border border-black/[0.04] z-10 animate-in slide-in-from-bottom duration-200">
        {/* Drag Handle Indicator */}
        <div className="w-12 h-1.5 bg-charcoal-200 rounded-full mx-auto mb-4" />

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg font-extrabold text-charcoal-900 tracking-tight">
            {title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="w-8 h-8 rounded-full bg-sand-100 text-charcoal-500 hover:text-charcoal-900 flex items-center justify-center transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};

// ============================================================================
// ILLUSTRATIVE COMPOSITE ASSEMBLIES
// (These are sample implementations showing how the 5 style pillars look together.
//  DO NOT copy the layout for unrelated apps!)
// ============================================================================

// Illustrative Sample 1: Top Navigation Bar
export const IllustrativeTopBar: React.FC<{ title: string; overline?: string }> = ({
  title,
  overline = 'WORKSPACE OS',
}) => {
  return (
    <header className="w-full flex items-center justify-between py-4 mb-4 select-none">
      <div className="flex items-center gap-3">
        <SandSquircleSquircleIcon>
          <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </SandSquircleSquircleIcon>
        <div>
          <span className="block text-[10px] font-extrabold uppercase tracking-widest text-teal-600">
            {overline}
          </span>
          <h1 className="text-lg font-extrabold text-charcoal-900 tracking-tight leading-snug">
            {title}
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <SandSquircleButton variant="iconCircle">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </SandSquircleButton>
      </div>
    </header>
  );
};

// Illustrative Sample 2: Floating Pill Bottom Navigation Dock
export const IllustrativePillDock: React.FC<{
  tabs: { key: string; label: string; icon: React.ReactNode }[];
  activeKey: string;
  onTabChange: (key: string) => void;
  onFabClick?: () => void;
}> = ({ tabs, activeKey, onTabChange, onFabClick }) => {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[420px] bg-white/95 backdrop-blur-md rounded-full px-5 py-3 shadow-pill-dock border border-black/[0.04] flex items-center justify-between z-40 select-none">
      {tabs.slice(0, 2).map((t) => (
        <button
          key={t.key}
          type="button"
          onClick={() => onTabChange(t.key)}
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeKey === t.key ? 'text-teal-600 font-bold' : 'text-charcoal-500 hover:text-charcoal-900'
          }`}
        >
          {t.icon}
          <span className="text-[10px]">{t.label}</span>
        </button>
      ))}

      {onFabClick && (
        <button
          type="button"
          onClick={onFabClick}
          aria-label="Quick Action"
          className="-mt-5 w-12 h-12 rounded-full bg-charcoal-900 text-white shadow-elevated-fab ring-4 ring-sand-100 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      )}

      {tabs.slice(2, 4).map((t) => (
        <button
          key={t.key}
          type="button"
          onClick={() => onTabChange(t.key)}
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeKey === t.key ? 'text-teal-600 font-bold' : 'text-charcoal-500 hover:text-charcoal-900'
          }`}
        >
          {t.icon}
          <span className="text-[10px]">{t.label}</span>
        </button>
      ))}
    </nav>
  );
};
