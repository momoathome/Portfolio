import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  // presetMini,
  // transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

/* @unocss-include */

export default defineConfig({
  shortcuts: [
    ['nav-item-link', 'no-underline transition transition-duration-200 py-2 px-4 w-max text-sm font-sans font-bold uppercase text-white hover:text-primary lg:( px-6 )'],

  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetWebFonts({
      provider: 'none', // default provider
      fonts: {
        sans: [
          {
            name: 'Roboto',
            italic: false,
            provider: 'none',
          },
        ],
      },
    }),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
  preflights: [],

  rules: [
    [/^text-(.*)$/, ([, c], { theme }) => {
      if (theme.colors[c])
        return { color: theme.colors[c] }
    }],
  ],
  theme: {
    colors: {
      base: 'var(--color_dark)',
      base_light: 'var(--color_white)',
      base_grey: 'var(--color_grey)',
      primary: 'var(--color_main)',
      secondary: 'var(--color_link)',
      /* tertiary: 'var(--tertiary))',
      accent: 'var(--accent))', */
    },
  },

})
