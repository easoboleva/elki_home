const products = [

  {
    id: 9,
    name: 'Искусственная настольная мини елка Mila',
    href: '/order',
    imageSrc: 'https://elkihome.ru/img/classic/MILA 90cm _1_.jpg',
    imageAlt: "Искусственная настольная мини елка Mila 90 см",
    price: '4400р.',
    color: 'Мини елка 90 см',
  },

  {
    id: 10,
    name: 'Искусственная заснеженная настольная мини елка Berta',
    href: '/order',
    imageSrc: 'https://elkihome.ru/img/classic/BERTA 90cm _1_.jpg',
    imageAlt: "Искусственная настольная мини елка Berta заснеженная 90 см",
    price: '4400р.',
    color: 'Мини елка заснеженная 90 см',
  },
  {
    id: 11,
    name: 'Искусственная настольная мини елка Boni',
    href: '/order',
    imageSrc: 'https://elkihome.ru/img/classic/BONI _1_.jpeg',
    imageAlt: "Искусственная настольная мини елка Boni 60 см",
    price: '1900р.',
    color: 'Мини елка 60 см',
  },
  {
    id: 12,
    name: 'Искусственная заснеженная настольная мини елка Mira',
    href: '/order',
    imageSrc: 'https://elkihome.ru/img/classic/MIRA _1_.jpg',
    imageAlt: "Искусственная настольная мини елка Mira заснеженная 90 см",
    price: '4900р.',
    color: 'мини елка заснеженная 90 см',
  },

]

export default function CatalogMini() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Настольные мини ели</h2>

        <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="relative group">
              <div className="w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="object-cover object-center w-full h-full lg:h-full lg:w-full"
                />
              </div>
              <div className="flex justify-between mt-4">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center pb-16">
        <a href="https://drive.google.com/file/d/1GaPUbVktoZ0KTcFkW4wpGH4dklK8IWaN/view?usp=sharing">
          <button
            type="submit"
            className="relative flex justify-center w-full px-4 py-2 text-sm font-bold leading-7 text-white bg-indigo-700 border border-transparent rounded-lg group hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
            Посмотреть весь каталог
            </button>
        </a>
      </div>
    </div>
    
  )
}
