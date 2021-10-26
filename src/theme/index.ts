import { Color, Theme } from "@material-ui/core"
import { Palette } from "@material-ui/core/styles/createPalette"
import { PaletteColorOptions } from "@material-ui/core/styles"
import { Shadows } from "@material-ui/core/styles/shadows"

export { MainTheme } from "./MainTheme"

export interface ThemeWithColor extends Theme {
  palette: Palette & PaletteColorWithShades
  shadows: Shadows
}

interface PaletteColorWithShades {
  primary: PaletteColorOptions & Color
  secondary: PaletteColorOptions & Color
  error: PaletteColorOptions & Color
  warning: PaletteColorOptions & Color
  info: PaletteColorOptions & Color
  success: PaletteColorOptions & Color
}
