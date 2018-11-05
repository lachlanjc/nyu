import { theme } from '@hackclub/design-system'
import palx from 'palx'

export const basic = {
  black: '#1f2d3d',
  steel: '#273444',
  slate: '#3c4858',
  grey: '#8492a6',
  smoke: '#e0e6ed',
  snow: '#f9fafc',
  white: '#ffffff',
  nyu: '#57068c',
  nyuBright: '#8900e1',
  accent: '#e10058',
  warning: '#e18900',
  success: '#00e189',
  info: '#0058e1',
  hackClub: '#e42d42'
}
basic.primary = basic.nyu
basic.muted = basic.silver

export const palette = palx(basic.nyuBright)

// export const brand = {
//   primary: palette.blue[5],
//   accent: palette.fuschia[5],
//   success: palette.teal[5],
//   info: palette.blue[5],
//   warning: palette.orange[5],
//   error: palette.red[7],
//   muted: basic.silver
// }

export const colors = {
  ...palette,
  ...basic
  // ...brand
}

theme.colors = colors

const baseFamily =
  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif'

const sans = '"Graphik"'

theme.font = `${sans},${baseFamily}`

export default theme
