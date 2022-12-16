const product = {
  name: 'Искусственная елка Сверк Дикий',
  price: '7900р.',
  href: '/product03',
  breadcrumbs: [
    { id: 1, name: 'Искусственные ели', href: '/' },
    { id: 2, name: 'Зеленые Классические ели', href: '/classic' },
  ],
  images: [
    {
      src: 'https://elkihome.ru/img/classic/Sverk-min.jpg',
      alt: 'Искусственная елка Сверк Дикий',
    },
    {
      src: 'https://elkihome.ru/img/classic/Сверк_Дикий-min.jpg',
      alt: 'Искусственная елка Сверк Дикий',
    },
    {
      src: 'https://elkihome.ru/img/classic/Сверк_Дикий-min.jpg',
      alt: 'Искусственная елка Сверк Дикий',
    },
    {
      src: 'https://elkihome.ru/img/classic/Sverk-min.jpg',
      alt: 'Искусственная елка Сверк Дикий',
    },
  ],

  description:
    'Отличительная особенность данной модели - ветви смотрят вверх, действительно дикий. Дикая ель будет отличным украшением новогоднего интерьера Вашего дома, создавая атмосферу дремучего, сказочного леса!',
  highlights: [
    'Материал хвои – Упругий ПВХ.',
    'Отсутствие запаха (при производстве используется сырье высшего качества).',
    'Металлическое основание.',
    'Срок службы – более 5 лет.',
    'Производство – Польша.',
  ],
  details:
    'Елка, подставка, коробка, инструкция.',
}

export default function Example() {

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="flex items-center max-w-2xl px-4 mx-auto space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-4 h-5 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

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
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="object-cover object-center w-full h-full"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-xl tracking-tight text-gray-900">
              <li>120 см - 5 900 руб.</li>
              <li>150 см - 6 900 руб.</li>
              <li>180 см - 9 900 руб.</li>
              <li>220 см - 11 900 руб.</li>
              <li>250 см - 13 900 руб.</li>
            </p>

            
            <div className="mt-6">
            <a href="/order">
            <button
                type="submit"
                className="flex items-center justify-center w-full px-8 py-3 mt-10 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >Заказать
                
              </button>
            </a>
            
            </div>


          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Описание</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Характеристики</h3>

              <div className="mt-4">
                <ul role="list" className="pl-4 space-y-2 text-sm list-disc">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Комплектация</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}