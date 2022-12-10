

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

const product = {
  images: [
    {
      src: 'https://ambrose.p-host.in//img/showroom/sr2.jpeg',
      alt: 'Шоу-рум СПБ',
    },
    {
      src: 'https://ambrose.p-host.in//img/showroom/sr1.jpg',
      alt: 'Шоу-рум',
    },
    {
      src: 'https://ambrose.p-host.in//img/showroom/srm6-min.png',
      alt: 'Шоу-рум',
    },
    {
      src: 'https://ambrose.p-host.in//img/showroom/sr1.jpeg',
      alt: 'Шоу-рум',
    },
  ],

}

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
        <div className="pt-6">

{/* Image gallery */}
<div className="max-w-2xl mx-auto mt-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
  <div className="hidden overflow-hidden rounded-lg aspect-w-3 aspect-h-4 lg:block">
    <img
      src={product.images[0].src}
      alt={product.images[0].alt}
      className="object-cover object-center w-full h-full"
    />
  </div>
  <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
    <div className="overflow-hidden rounded-lg aspect-w-3 aspect-h-2">
      <img
        src={product.images[1].src}
        alt={product.images[1].alt}
        className="object-cover object-center w-full h-full"
      />
    </div>
    <div className="overflow-hidden rounded-lg aspect-w-3 aspect-h-2">
      <img
        src={product.images[2].src}
        alt={product.images[2].alt}
        className="object-cover object-center w-full h-full"
      />
    </div>
  </div>
  <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
    <img
      src={product.images[3].src}
      alt={product.images[3].alt}
      className="object-cover object-center w-full h-full"
    />
  </div>
</div>
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
