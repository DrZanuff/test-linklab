import {
  AccessoriesIcon,
  EquipamentsIcon,
  GlassIcon,
  InoxIcon,
  PlasticIcon,
  PorcelainIcon,
  ThermometerIcon,
} from '@/app/assets/header/icons'

interface ILink {
  text?: string
  link?: string
  enabled?: boolean
}

interface ISubCategory extends ILink {
  icon?: JSX.Element
}

export interface ICategory extends ILink {
  title: string

  subCategories?: ISubCategory[]
}

interface IHeaderLinks extends ILink {
  categories?: ICategory[]
  seo?: string
}

export const headerLinks: IHeaderLinks[] = [
  {
    link: '/',
    enabled: true,
    text: 'Inicio',
  },
  {
    text: 'Produtos',
    link: '/produtos',
    enabled: false,
    seo: 'Catálogo completo de itens para você',
    categories: [
      {
        title: 'Laborátório',
        subCategories: [
          {
            text: 'Equipamentos',
            enabled: false,
            icon: <EquipamentsIcon />,
          },
          {
            text: 'Acessórios',
            enabled: false,
            icon: <AccessoriesIcon />,
          },
          {
            text: 'Termômetros',
            enabled: false,
            icon: <ThermometerIcon />,
          },
        ],
      },
      {
        title: 'Utensílios',
        subCategories: [
          {
            text: 'Inox e Ferragens',
            enabled: false,
            icon: <InoxIcon />,
          },
          {
            text: 'Plásticos',
            enabled: false,
            icon: <PlasticIcon />,
          },
          {
            text: 'Vidrarias',
            enabled: false,
            icon: <GlassIcon />,
          },
          {
            text: 'Porcelanas',
            enabled: false,
            icon: <PorcelainIcon />,
          },
        ],
      },
    ],
  },
  {
    text: 'Laudos',
    enabled: false,
  },
  {
    text: 'Sobre nós',
    enabled: false,
  },
  {
    text: 'Certificações',
    enabled: false,
  },
  {
    text: 'Contato',
    enabled: false,
  },
]
