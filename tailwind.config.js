/** @type {import('tailwindcss').Config} */

const themeColors = require('./colors.js'); // Importe suas cores personalizadas

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
      },
      zIndex: {
        '99999': 99999,
        '90000': 90000,
        '80000': 80000,
      },
      fontFamily: {
        'brand': ['Proxima Nova', 'sans-serif'], // substitua 'sans' se quiser criar um nome diferente
      },
      fontSize: {
        'heading-1': ['3rem', { lineHeight: '4.5rem' }], // 48px com altura de linha de 72px
        'heading-2': ['2rem', { lineHeight: '3rem' }],    // 32px com altura de linha de 48px
        'heading-3': ['1.5rem', { lineHeight: '2.5rem' }], // 24px com altura de linha de 40px
        'heading-4': ['1rem', { lineHeight: '1.5rem' }],   // 16px com altura de linha de 24px
        'heading-5': ['0.75rem', { lineHeight: '1rem' }],  // 12px com altura de linha de 16px
        'heading-6': ['0.5rem', { lineHeight: '0.75rem' }], // 8px com altura de linha de 12px

        'subheading-1': ['3rem', { lineHeight: '4.5rem' }], // 48px com altura de linha de 72px
        'subheading-2': ['2rem', { lineHeight: '3rem' }],    // 32px com altura de linha de 48px
        'subheading-3': ['1.5rem', { lineHeight: '2.5rem' }], // 24px com altura de linha de 40px
        'subheading-4': ['1rem', { lineHeight: '1.5rem' }],   // 16px com altura de linha de 24px
        'subheading-5': ['0.75rem', { lineHeight: '1rem' }],  // 12px com altura de linha de 16px
        'subheading-6': ['0.5rem', { lineHeight: '0.75rem' }], // 8px com altura de linha de 12px

        'body-1': ['3rem', { lineHeight: '4.5rem' }], // 48px com altura de linha de 72px
        'body-2': ['2rem', { lineHeight: '3rem' }],   // 32px com altura de linha de 48px
        'body-3': ['1.5rem', { lineHeight: '2.5rem' }], // 24px com altura de linha de 40px
        'body-4': ['1rem', { lineHeight: '1.5rem' }], // 16px com altura de linha de 24px
        'body-5': ['0.75rem', { lineHeight: '1rem' }], // 12px com altura de linha de 16px
        'body-6': ['0.5rem', { lineHeight: '0.75rem' }], // 8px com altura de linha de 12px
      },
      fontWeight: {
        'heading': '700', // 'bold'
        'subheading': '600', // 'semibold'
        'button': '600', // 'semibold'
        'link': '400', // 'regular'

        light: '300', // Ajuste para o valor numérico correto, se necessário
        normal: '400', // Ajuste para o valor numérico correto, se necessário
        semibold: '600', // Ajuste para o valor numérico correto, se necessário
        bold: '700', // Ajuste para o valor numérico correto, se necessário
      },
      lineHeight: {
        4: '1rem', // 16px
        6: '1.5rem', // 24px
        10: '2.5rem', // 40px
        11: '3rem', // 48px
        20: '4.5rem', // 72px
        22: '6rem', // 96px
      },
      spacing: {
        4: '1rem', // 16px usado para margens e padding também
        6: '1.5rem', // 24px
        8: '2rem', // 32px
        11: '3rem', // 48px
        12: '4rem', // 64px
        22: '6rem', // 96px
      },

      colors: {
        'turquesa-400': '#2f9293',
        'turquesa-300': '#54b2b3',
        'turquesa-200': '#73d1d1',
        'turquesa-100': '#90eded',
        'turquesa-50': '#a4ffff',
        'turquesa-900': '#001f1f',
        'turquesa-800': '#002b2e',
        'turquesa-700': '#003f42',
        'turquesa-600': '#005a5c',
        'turquesa-500': '#0b7d7e',

        'ferrugem-500': '#b63637',
        'ferrugem-600': '#971421',
        'ferrugem-700': '#770009',
        'ferrugem-800': '#5e0000',
        'ferrugem-900': '#4b0000',
        'ferrugem-400': '#e35f59',
        'ferrugem-300': '#ff786f',
        'ferrugem-200': '#ff968b',
        'ferrugem-100': '#ffb2a6',
        'ferrugem-50': '#ffc9bb',

        'amarelo-50': '#fff938',
        'amarelo-100': '#ffbe28',
        'amarelo-200': '#f4b51a',
        'amarelo-300': '#d39700',
        'amarelo-400': '#b88000',
        'amarelo-500': '#976400',
        'amarelo-600': '#714300',
        'amarelo-700': '#562a00',
        'amarelo-800': '#431600',
        'amarelo-900': '#380500',

        'azul-500': '#0078cc',
        'azul-400': '#3b90e7',
        'azul-300': '#5ba8ff',
        'azul-200': '#7dc6ff',
        'azul-100': '#9ce2ff',
        'azul-50': '#b1f6ff',
        'azul-900': '#00195b',
        'azul-800': '#00276d',
        'azul-700': '#003a84',
        'azul-600': '#0053a1',

        'ametista-300': '#c08fef',
        'ametista-50': '#ffdcff',
        'ametista-100': '#fdc8ff',
        'ametista-200': '#e0acff',
        'ametista-400': '#a777d5',
        'ametista-500': '#895bb7',
        'ametista-600': '#672f93',
        'ametista-700': '#4e177a',
        'ametista-800': '#370063',
        'ametista-900': '#1f004c',

        'fuligem-100': '#dddddd',
        'fuligem-200': '#c1c1c1',
        'fuligem-300': '#a3a3a3',
        'fuligem-400': '#8b8b8b',
        'fuligem-500': '#6f6f6f',
        'fuligem-600': '#4e4e4e',
        'fuligem-700': '#353535',
        'fuligem-900': '#151515',
        'fuligem-800': '#1d1d1d',
        'fuligem-50': '#f9f9f9',

        'brand-primary': '#672f93',
        'brand-secondary': '#b63637',
        'brand-tertiary': '#0078cc',

        'font-color-light': '#f9f9f9',
        'font-color-dark': '#1d1d1d',
        'font-color-muted-1': '#dddddd',
        'font-color-muted-2': '#6f6f6f',
        'font-color-success': '#3bde00',
        'font-color-warning': '#f4b51a',
        'font-color-danger': '#e35f59',

        'accent-primary-50': '#a4ffff',
        'accent-primary-100': '#90eded',
        'accent-primary-200': '#73d1d1',
        'accent-primary-300': '#54b2b3',
        'accent-primary-400': '#2f9293',
        'accent-primary-500': '#0b7d7e',
        'accent-primary-600': '#005a5c',
        'accent-primary-700': '#003f42',
        'accent-primary-800': '#002b2e',
        'accent-primary-900': '#001f1f',

        'accent-secondary-50': '#fff938',
        'accent-secondary-100': '#ffbe28',
        'accent-secondary-200': '#f4b51a',
        'accent-secondary-300': '#d39700',
        'accent-secondary-400': '#b88000',
        'accent-secondary-500': '#976400',
        'accent-secondary-600': '#714300',
        'accent-secondary-700': '#562a00',
        'accent-secondary-800': '#431600',
        'accent-secondary-900': '#380500',

        'semantic-link-default': '#3b90e7',
        'semantic-link-clicked': '#672f93',
        'semantic-primary-default': '#672f93',
        'semantic-primary-hover': '#895bb7',
        'semantic-primary-active': '#4e177a',
        'semantic-secondary-default': '#971421',
        'semantic-secondary-hover': '#b63637',
        'semantic-secondary-active': '#770009',
        'semantic-tertiary-default': '#0053a1',
        'semantic-tertiary-hover': '#0078cc',
        'semantic-tertiary-active': '#003a84',
        'semantic-accent-default': '#2f9293',
        'semantic-accent-hover': '#0b7d7e',
        'semantic-accent-active': '#005a5c',
        'semantic-accent2-default': '#ffbe28',
        'semantic-accent2-hover': '#f4b51a',
        'semantic-accent2-active': '#d39700',

        'surface-light': '#f2f2f2',
        'surface-dark': '#1d1d1d',

        'bg-light': '#fdfdfd',
        'bg-dark': '#151515',
        'bg-muted-1': '#dddddd',
        'bg-muted-2': '#6f6f6f',
        'bg-primary': '#672f93',
        'bg-secondary': '#b63637',
        'bg-tertiary': '#0078cc',
        'bg-lighter': '#fcfcfc',

        'feedback-success-bg': '#3bde00',
        'feedback-success-surface': '#006200',
        'feedback-danger-bg': '#e35f59',
        'feedback-danger-surface': '#ffc9bb',
        'feedback-warning-bg': '#f97316',
        'feedback-warning-surface': '#ffc9bb',

        'border-muted': '#6f6f6f',
        'border-light': '#f9f9f9',
        'border-dark': '#1d1d1d',
        'border-light2': '#dddddd',
        'border-brand': '#4e177a',


        ...themeColors.global, // Espalha as cores 'global'
        ...themeColors.brand, // Espalha as cores 'brand'
        ...themeColors.font, // Espalha as cores 'font'
        ...themeColors.accent, // Espalha as cores 'accent'
        ...themeColors.semantic, // Espalha as cores 'semantic'
        ...themeColors.surface, // Espalha as cores 'surface'
        ...themeColors.background, // Espalha as cores 'background'
        ...themeColors.feedback, // Espalha as cores 'feedback'
        ...themeColors.border, // Espalha as cores 'border'
      },

      backgroundImage: {
        'custom-gradient': "linear-gradient(180deg, #672F93 46.5%, #F2F2F2 46.51%)",
      }
      
    },
  },
  plugins: [],
};


