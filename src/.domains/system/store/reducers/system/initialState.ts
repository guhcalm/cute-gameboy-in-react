import { StatusInterfaces, SystemInterfaces } from "../../../../../interfaces"
const { INACTIVATE } = StatusInterfaces.StatusEnum

export default {
  status: INACTIVATE,
  pages: { current: SystemInterfaces.PagesEnum.BOOT_SCREEN },
  keypad: {
    startupSwitcher: INACTIVATE,
    directionalPad: {
      left: INACTIVATE,
      right: INACTIVATE,
      up: INACTIVATE,
      down: INACTIVATE
    },
    operationalPad: {
      select: INACTIVATE,
      start: INACTIVATE
    },
    actionPad: {
      q: INACTIVATE,
      e: INACTIVATE
    }
  }
} as SystemInterfaces.SystemInterface
