// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      'node_modules/@chargetrip/internal-vue-components/src/**/*.vue',
    ],
  },
  theme: {
    extend: {
      screens: {
        xl2: '1439px',
        'xl2-max': { max: '1439px' },
        // => @media (max-width: 1439px) { ... }

        'xl-max': { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        'lg-max': { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        'md-max': { max: '767px' },
        // => @media (max-width: 767px) { ... }

        'sm-max': { max: '639px' },
        // => @media (max-width: 639px) { ... }
      },
      maxWidth: {
        xl: '1024px',
        lg: '720px',
        md: '352px',
        sm: '160px',
      },
      colors: {
        body: 'var(--body)',
        base: 'var(--base)',
        subdued: 'var(--subdued)',
        alt: 'var(--alt)',
        alt2: 'var(--alt2)',
        alt3: 'var(--alt3)',
        alt4: 'var(--alt4)',
        accent: 'var(--accent)',
        'accent-alt': 'var(--accent-alt)',
        'accent-alt2': 'var(--accent-alt2)',
        'font-primary': 'var(--font-primary)',
        'font-alt': 'var(--font-alt)',
        'font-alt2': 'var(--font-alt2)',
        'font-alt3': 'var(--font-alt3)',
        'font-accent': 'var(--font-accent)',
        black: 'var(--black)',
        white: 'var(--white)',
        warning: 'var(--warning)',
        'warning-alt': 'var(--warning-alt)',
        'warning-alt2': 'var(--warning-alt2)',
        error: 'var(--error)',
        'error-alt': 'var(--error-alt)',
        'error-alt2': 'var(--error-alt2)',
        success: 'var(--success)',
        'success-alt': 'var(--success-alt)',
        'success-alt2': 'var(--success-alt2)',
        note: 'var(--note)',
        'note-alt': 'var(--note-alt)',
        'note-alt2': 'var(--note-alt2)',
      },
      spacing: {
        2.5: '0.625rem',
        7: '1.75rem',
        9: '2.25rem',
        13: '3.25rem',
        14: '3.5rem',
        15: '3.75rem',
        17: '4.25rem',
        30: '7.5rem',
      },
      borderRadius: {
        '2xs': '2px',
        xs: '3px',
        sm: '4px',
        md: '6px',
        default: '8px',
        lg: '10px',
        xl: '12px',
      },
      cursor: {
        'ew-resize': 'ew-resize',
        'ns-resize': 'ns-resize',
      },
      height: {
        '1/2': '50%',
      },
      inset: {
        '1/2': '50%',
        '1/3': `calc(100% / 3)`,
        full: '100%',
      },
      opacity: {
        20: 0.2,
        80: 0.8,
      },
      fontSize: {
        0: 0,
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        32: '32px',
        40: '40px',
        64: '64px',
      },
      translate: {
        '1/4': '25%',
      },
      fontFamily: {
        mono: [
          "'Roboto Mono', monospace",
          'Consolas',
          'Courier New Bold',
          'Menlo',
          'Monaco',
          'Liberation Mono',
          'monospace',
        ],
        display: "'Inter', sans-serif",
        body: "'Inter', sans-serif",
      },
      boxShadow: {
        'up-xl': 'var(--shadow-up-xl)',
        'up-md': 'var(--shadow-up-md)',
        'down-xl': 'var(--shadow-down-xl)',
        'down-md': 'var(--shadow-down-md)',
        'down-sm': 'var(--shadow-down-sm)',
        overlay: 'var(--shadow-overlay)',
        xs: '0px 1px 0px #030303',
        default: '0px 6px 6px rgba(0, 0, 0, 0.15)',
        inset: 'inset 0px -1px 0px #2D2E33',
      },
    },
  },
  corePlugins: {
    container: false,
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    display: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    borderRadius: ['responsive', 'first', 'last'],
    borderWidth: ['responsive', 'first', 'last'],
    margin: ['responsive', 'last', 'first'],
    padding: ['responsive', 'last', 'first'],
  },
}
