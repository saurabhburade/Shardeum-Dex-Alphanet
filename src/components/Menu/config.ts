import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/swap',
  },

  {
    label: 'Swap',
    icon: 'TradeIcon',
    href: '/swap',
  },
  {
    label: 'Add/Remove Liquidity',
    icon: 'TradeIcon',
    href: '/pool',
  }
]

export default config
