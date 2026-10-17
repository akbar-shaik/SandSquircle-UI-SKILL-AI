import React, { useState } from 'react';

// ============================================================================
// SandSquircle UI Component Recipes (React + Tailwind CSS)
// Clean, zero-dependency, copy-pasteable production implementations.
// ============================================================================

// ----------------------------------------------------------------------------
// 1. SandSquircleTopBar
// Squircle logo, uppercase teal overline, bold greeting, circular white icon buttons.
// ----------------------------------------------------------------------------
export interface TopBarProps {
  greeting?: string;
  subtitle?: string;
  notificationCount?: number;
  onNotificationClick?: () => void;
  onProfileClick?: () => void;
}

export const SandSquircleTopBar: React.FC<TopBarProps> = ({
  greeting = 'Good morning, Alex',
  subtitle = 'FINANCIAL OPERATING SYSTEM',
  notificationCount = 2,
  onNotificationClick,
  onProfileClick,
}) => {
  return (
    <header className="w-full flex items-center justify-between py-4 mb-4 select-none">
      {/* Brand Identity / Squircle Logo & Greeting */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 bg-charcoal-900 text-sand-50 rounded-[22%] flex items-center justify-center shadow-md shadow-charcoal-900/10 transition-transform active:scale-95 cursor-pointer">
          <svg className="w-6 h-6 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <span className="block text-[10px] font-extrabold uppercase tracking-widest text-teal-600">
            {subtitle}
          </span>
          <h1 className="text-lg font-extrabold text-charcoal-900 tracking-tight leading-snug">
            {greeting}
          </h1>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onNotificationClick}
          aria-label="Notifications"
          className="relative w-10 h-10 rounded-full bg-white shadow-soft-card border border-black/[0.04] flex items-center justify-center text-charcoal-700 hover:text-charcoal-900 hover:shadow-soft-card-hover active:scale-95 transition-all"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          {notificationCount > 0 && (
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-crimsonCoral-text ring-2 ring-white animate-pulse" />
          )}
        </button>

        <button
          type="button"
          onClick={onProfileClick}
          aria-label="User Profile"
          className="w-10 h-10 rounded-full bg-white shadow-soft-card border border-black/[0.04] flex items-center justify-center text-charcoal-700 hover:text-charcoal-900 hover:shadow-soft-card-hover active:scale-95 transition-all overflow-hidden"
        >
          <div className="w-full h-full bg-sand-200 flex items-center justify-center font-bold text-xs text-charcoal-700">
            AS
          </div>
        </button>
      </div>
    </header>
  );
};

// ----------------------------------------------------------------------------
// 2. SandSquircleHeroCard (Light Balance Card)
// Light balance card with Eye/EyeOff privacy mask and 2-column semantic pills.
// ----------------------------------------------------------------------------
export interface HeroCardProps {
  balance?: number;
  receivable?: number;
  payable?: number;
}

export const SandSquircleHeroCard: React.FC<HeroCardProps> = ({
  balance = 48290.00,
  receivable = 12450.00,
  payable = 3180.50,
}) => {
  const [isMasked, setIsMasked] = useState(false);

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);

  return (
    <div className="w-full bg-white rounded-[26px] p-6 shadow-soft-card border border-black/[0.03] mb-4">
      {/* Header with Privacy Toggle */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-charcoal-500 uppercase tracking-wider">
          Total Net Position
        </span>
        <button
          type="button"
          onClick={() => setIsMasked(!isMasked)}
          aria-label={isMasked ? 'Reveal balance' : 'Hide balance'}
          className="text-charcoal-400 hover:text-charcoal-900 transition-colors p-1 rounded-lg"
        >
          {isMasked ? (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          )}
        </button>
      </div>

      {/* Main Metric */}
      <div className="mb-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-charcoal-900">
          {isMasked ? '••••••••••••' : formatCurrency(balance)}
        </h2>
      </div>

      {/* 2-Column Semantic Mini-Cards */}
      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-sand-200">
        {/* Receivable / Inflow (Emerald Mint) */}
        <div className="bg-emeraldMint-bg/50 border border-emeraldMint-border/60 rounded-[22px] p-3.5 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-emeraldMint-text" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-700">
              Receivables
            </span>
          </div>
          <span className="text-base font-extrabold text-charcoal-900 tracking-tight">
            {isMasked ? '••••••' : formatCurrency(receivable)}
          </span>
        </div>

        {/* Payable / Outflow (Crimson Coral) */}
        <div className="bg-crimsonCoral-bg/50 border border-crimsonCoral-border/60 rounded-[22px] p-3.5 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-crimsonCoral-text" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-700">
              Payables
            </span>
          </div>
          <span className="text-base font-extrabold text-charcoal-900 tracking-tight">
            {isMasked ? '••••••' : formatCurrency(payable)}
          </span>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------------
// 3. SandSquircleDarkHeroCard
// Charcoal gradient analytics card with frosted bg-white/5 glass sub-metric boxes.
// ----------------------------------------------------------------------------
export const SandSquircleDarkHeroCard: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-[#0A0E17] text-white rounded-[28px] p-6 shadow-xl border border-white/10 mb-4 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Tag */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-bold uppercase tracking-wider text-sand-300">
          Monthly Runway & Burn
        </span>
        <span className="bg-emerald-500/20 text-emerald-300 text-[11px] font-bold px-2.5 py-1 rounded-full border border-emerald-500/30">
          +14.2% Health
        </span>
      </div>

      {/* Hero Metric */}
      <div className="mb-5">
        <div className="text-3xl font-extrabold tracking-tight text-white">
          14.8 Months
        </div>
        <p className="text-xs text-charcoal-400 font-medium mt-0.5">
          Based on 90-day dynamic adjusted net operating cash flow
        </p>
      </div>

      {/* Frosted Glass Sub-Metric Containers */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-3 border border-white/10">
          <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-400 block mb-1">
            Net Burn / Mo
          </span>
          <span className="text-sm font-bold text-white">$18,400.00</span>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-3 border border-white/10">
          <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-400 block mb-1">
            Liquid Reserves
          </span>
          <span className="text-sm font-bold text-teal-400">$272,320.00</span>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------------
// 4. SandSquircleCategoryGrid
// 5-column squircle icon grid with micro-labels and smooth scale feedback.
// ----------------------------------------------------------------------------
export interface CategoryItem {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export const SandSquircleCategoryGrid: React.FC<{ onItemClick?: (id: string) => void }> = ({
  onItemClick,
}) => {
  const items: CategoryItem[] = [
    {
      id: 'send',
      name: 'Send',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
    },
    {
      id: 'invoice',
      name: 'Invoices',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      id: 'cards',
      name: 'Cards',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      id: 'stats',
      name: 'Analytics',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      id: 'vault',
      name: 'Vault',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-2 sm:gap-3 my-4">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onItemClick?.(item.id)}
          className="group flex flex-col items-center gap-1.5 focus:outline-none"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white shadow-soft-card border border-black/[0.03] text-charcoal-700 flex items-center justify-center transition-all duration-150 group-hover:scale-105 group-hover:text-charcoal-900 group-hover:shadow-soft-card-hover group-active:scale-95">
            {item.icon}
          </div>
          <span className="text-[11px] font-bold text-charcoal-700 tracking-tight text-center">
            {item.name}
          </span>
        </button>
      ))}
    </div>
  );
};

// ----------------------------------------------------------------------------
// 5. SandSquircleStatusBadge & SandSquircleListRow
// List card with tinted icon squircle, title/subtitle, metric, action button, status pill.
// ----------------------------------------------------------------------------
export type StatusType = 'paid' | 'overdue' | 'pending';

export const SandSquircleStatusBadge: React.FC<{ status: StatusType; label?: string }> = ({
  status,
  label,
}) => {
  const configs = {
    paid: {
      text: 'text-emeraldMint-text',
      bg: 'bg-emeraldMint-bg',
      border: 'border-emeraldMint-border',
      dot: 'bg-emeraldMint-text',
      defaultLabel: 'Paid',
    },
    overdue: {
      text: 'text-crimsonCoral-text',
      bg: 'bg-crimsonCoral-bg',
      border: 'border-crimsonCoral-border',
      dot: 'bg-crimsonCoral-text',
      defaultLabel: 'Overdue',
    },
    pending: {
      text: 'text-amberSand-text',
      bg: 'bg-amberSand-bg',
      border: 'border-amberSand-border',
      dot: 'bg-amberSand-text',
      defaultLabel: 'Pending',
    },
  };

  const c = configs[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border ${c.text} ${c.bg} ${c.border}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      {label || c.defaultLabel}
    </span>
  );
};

export interface ListRowProps {
  title: string;
  subtitle: string;
  amount: string;
  isCredit?: boolean;
  status: StatusType;
  categoryIcon?: React.ReactNode;
  onClick?: () => void;
}

export const SandSquircleListRow: React.FC<ListRowProps> = ({
  title,
  subtitle,
  amount,
  isCredit = false,
  status,
  categoryIcon,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="w-full bg-white rounded-2xl p-4 shadow-soft-card border border-black/[0.03] flex items-center justify-between transition-all duration-150 hover:shadow-soft-card-hover active:scale-[0.99] cursor-pointer mb-2.5"
    >
      {/* Left: Icon & Description */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-2xl bg-sand-100 border border-sand-300 text-charcoal-700 flex items-center justify-center flex-shrink-0">
          {categoryIcon || (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          )}
        </div>
        <div>
          <h4 className="text-sm font-bold text-charcoal-900 tracking-tight leading-snug">
            {title}
          </h4>
          <span className="text-xs text-charcoal-500 font-medium">
            {subtitle}
          </span>
        </div>
      </div>

      {/* Right: Amount & Status Badge */}
      <div className="flex flex-col items-end gap-1">
        <span
          className={`text-sm font-extrabold tracking-tight ${
            isCredit ? 'text-emeraldMint-text' : 'text-charcoal-900'
          }`}
        >
          {amount}
        </span>
        <SandSquircleStatusBadge status={status} />
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------------
// 6. SandSquircleFloatingDock
// Centered bottom floating pill dock with 4 tabs + elevated center Charcoal FAB.
// ----------------------------------------------------------------------------
export interface FloatingDockProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  onFabClick?: () => void;
}

export const SandSquircleFloatingDock: React.FC<FloatingDockProps> = ({
  activeTab = 'home',
  onTabChange,
  onFabClick,
}) => {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[420px] bg-white/95 backdrop-blur-md rounded-full px-5 py-3 shadow-pill-dock border border-black/[0.04] flex items-center justify-between z-40">
      {/* Tab 1: Home */}
      <button
        type="button"
        onClick={() => onTabChange?.('home')}
        className={`flex flex-col items-center gap-1 transition-colors ${
          activeTab === 'home' ? 'text-teal-600 font-bold' : 'text-charcoal-500 hover:text-charcoal-900'
        }`}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span className="text-[10px]">Home</span>
      </button>

      {/* Tab 2: Activity */}
      <button
        type="button"
        onClick={() => onTabChange?.('activity')}
        className={`flex flex-col items-center gap-1 transition-colors ${
          activeTab === 'activity' ? 'text-teal-600 font-bold' : 'text-charcoal-500 hover:text-charcoal-900'
        }`}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
        <span className="text-[10px]">Activity</span>
      </button>

      {/* Center Elevated FAB */}
      <button
        type="button"
        onClick={onFabClick}
        aria-label="Add transaction"
        className="-mt-5 w-12 h-12 rounded-full bg-charcoal-900 text-white shadow-elevated-fab ring-4 ring-sand-100 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
        </svg>
      </button>

      {/* Tab 3: Insights */}
      <button
        type="button"
        onClick={() => onTabChange?.('insights')}
        className={`flex flex-col items-center gap-1 transition-colors ${
          activeTab === 'insights' ? 'text-teal-600 font-bold' : 'text-charcoal-500 hover:text-charcoal-900'
        }`}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        <span className="text-[10px]">Insights</span>
      </button>

      {/* Tab 4: Settings */}
      <button
        type="button"
        onClick={() => onTabChange?.('settings')}
        className={`flex flex-col items-center gap-1 transition-colors ${
          activeTab === 'settings' ? 'text-teal-600 font-bold' : 'text-charcoal-500 hover:text-charcoal-900'
        }`}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="text-[10px]">Settings</span>
      </button>
    </nav>
  );
};

// ----------------------------------------------------------------------------
// 7. SandSquircleModal
// 32px rounded bottom-sheet / centered dialog with inputs and primary submit CTA.
// ----------------------------------------------------------------------------
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  onSubmit?: (e: React.FormEvent) => void;
}

export const SandSquircleModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title = 'Create Quick Transaction',
  onSubmit,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Blurred Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-charcoal-900/40 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog Shell */}
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

        {/* Form Body */}
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-charcoal-700 mb-1.5 block">
              Counterparty or Description
            </label>
            <input
              type="text"
              placeholder="e.g. Acme Corp Retainer"
              className="w-full bg-sand-50 border border-sand-300 rounded-2xl px-4 py-3 text-sm text-charcoal-900 outline-none focus:ring-2 focus:ring-charcoal-900 focus:bg-white transition-all"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-charcoal-700 mb-1.5 block">
                Amount (USD)
              </label>
              <input
                type="number"
                step="0.01"
                placeholder="0.00"
                className="w-full bg-sand-50 border border-sand-300 rounded-2xl px-4 py-3 text-sm text-charcoal-900 outline-none focus:ring-2 focus:ring-charcoal-900 focus:bg-white transition-all font-bold"
                required
              />
            </div>
            <div>
              <label className="text-xs font-bold text-charcoal-700 mb-1.5 block">
                Category
              </label>
              <select className="w-full bg-sand-50 border border-sand-300 rounded-2xl px-3 py-3 text-sm text-charcoal-900 outline-none focus:ring-2 focus:ring-charcoal-900 focus:bg-white transition-all">
                <option value="invoice">Client Invoice</option>
                <option value="subscription">Software License</option>
                <option value="transfer">Treasury Transfer</option>
                <option value="payroll">Payroll Expense</option>
              </select>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-charcoal-900 text-sand-50 py-3.5 rounded-2xl font-bold text-sm shadow-md hover:bg-charcoal-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              Confirm and Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
