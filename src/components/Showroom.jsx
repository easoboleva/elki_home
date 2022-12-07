import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Адрес шоу-рума в Москве',
    description:
      'Москва 3-й Красносельский переулок, 19к3',
    icon: GlobeAltIcon,
  },
  {
    name: 'Адрес шоу-рума в Санкт-Петербурге',
    description:
      'Санкт-Петербург Набережная реки мойки, 112',
    icon: GlobeAltIcon,
  },
  {
    name: 'Режим работы',
    description:
      'Мы работаем ежедневно с 10:00 до 21:00 и с нетерпением ждем вас в гости, по предварительной записи',
    icon: BoltIcon,
  },
  {
    name: 'Ассортимент',
    description:
      'В Шоу-руме представлено более 40 моделей искусственных елок, рождественские венки и хвойные гирлянды. В наличии весь ассортимент размеров, цветов и комплектаций , каждый год шоу-рум пополняется роскошными новогодними аксессуарами и игрушками!',
    icon: DevicePhoneMobileIcon,
  },
]

export default function Showrooms() {
  return (
    <div className="py-5 bg-white sm:py-32 lg:py-40">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-indigo-600">Наши шоу-румы</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Москва и Санкт-Петербург</p>
          <p className="max-w-2xl mx-auto mt-6 text-lg leading-8 text-gray-600">
          Посетите самый большой шоу-рум искусственных елей в Москве или Санкт-Петербурге. Каждый гость уходит от нас с покупкой и волшебным настроением!
          </p>
        </div>

        <div className="max-w-lg mt-20 sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-xl sm:shrink-0">
                  <feature.icon className="w-8 h-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                  <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
