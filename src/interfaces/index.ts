/**
 * @Theme
 */
export enum ThemesEnum {
  Default = "DEFAULT"
}

interface ColorInterface {
  light?: string
  main: string
  dark?: string
  on: string
}

export interface ThemeInterface {
  name: ThemesEnum
  palette: {
    surface: ColorInterface
    background: ColorInterface
    error: ColorInterface
    primary: ColorInterface
    secondary: ColorInterface
  }
}

export enum StatusEnum {
  Active = "ACTIVE",
  Inactive = "INACTIVE"
}

/**
 * @DirectionalPad
 */
enum DirectionalPadEnum {
  Left = "LEFT",
  Right = "RIGHT",
  Up = "UP",
  Down = "DOWN"
}
interface DirectionalPadInterface {
  left: DirectionalPadEnum.Left
  right: DirectionalPadEnum.Right
  up: DirectionalPadEnum.Up
  down: DirectionalPadEnum.Down
}

/**
 * @OperationalPad
 */
enum OperationalPadEnum {
  Select = "SELECT",
  Start = "START"
}
interface OperationalPadInterface {
  select: OperationalPadEnum.Select
  start: OperationalPadEnum.Start
}

/**
 * @ActionPad
 */
enum ActionPadEnum {
  E = "E",
  Q = "Q"
}
interface ActionPadInterface {
  e: ActionPadEnum.E
  q: ActionPadEnum.Q
}

/**
 * @Settings
 */
interface SettingsInterface {
  theme: ThemeInterface
}

/**
 * @User
 */
interface UserInterface {
  status: StatusEnum
  profile: { name: string; score: number }
}

/**
 * @Mouse
 */
interface MouseInterface {
  position: {
    x: number
    y: number
  }
}

/**
 * @Keypad
 */
interface KeypadInterface {
  startupSwitcher: StatusEnum
  directionalPad: DirectionalPadInterface
  operationalPad: OperationalPadInterface
  actionPad: ActionPadInterface
}

/**
 * @Hardware
 */
interface HardwareInterface {
  status: StatusEnum
  settings: SettingsInterface
  keypad: KeypadInterface
}

/**
 * @System
 */
interface SystemInterface {
  status: StatusEnum
  keypad: KeypadInterface
  user: UserInterface
  settings: SettingsInterface
}

/**
 * @Gameboy_Core
 */
interface GameboyInterface {
  status: StatusEnum
  settings: SettingsInterface
  mouse: MouseInterface
  keys: KeypadInterface
  domains: {
    mouse: MouseInterface
    keyboard: KeypadInterface
    hardware: HardwareInterface
    system: SystemInterface
  }
}