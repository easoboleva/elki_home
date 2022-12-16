
const products = [
  {
    id: 1,
    name: 'Искусственная елка «Классика Lux»',
    href: '/order',
    imageSrc: 'https://elkihome.ru/img/classic/classika150-min.jpg',
    imageAlt: "Искусственная елка «Классика Lux»",
    price: 'от 2900р.',
    color: 'Классическая(ПВХ) от 120 см',
  },
  {
    id: 2,
    name: 'Искусственная елка Elza',
    href: '/order',
    imageSrc: 'https://elkihome.ru/img/classic/elza.jpg',
    imageAlt: "Искусственная елка Elza 150 см",
    price: 'от 7900р.',
    color: 'Классическая(ПВХ) от 150 см',
  },
  {
    id: 3,
    name: 'Искусственная елка Сверк Дикий',
    href: '/product03',
    imageSrc: 'https://elkihome.ru/img/classic/Sverk-min.jpg',
    imageAlt: "Искусственная елка Сверк Дикий",
    price: 'от 5900р.',
    color: 'Классическая(ПВХ) от 120 см',
  },
  {
    id: 4,
    name: 'Искусственная елка Toscana',
    href: '/order',
    imageSrc: 'https://elkihome.ru/img/classic/TOSCANA-min.jpg',
    imageAlt: "Искуственная елка Toskana 150 см",
    price: 'от 10900р.',
    color: 'Премиум(Литая+ПВХ) от 150 см',
  },
  {
    id: 5,
    name: 'Искусственная елка Verona',
    href: '/order',
    imageSrc: 'https://elkihome.ru/img/classic/VERONA-min.jpg',
    imageAlt: "Искусственная елка Verona 180 см",
    price: 'от 19900р.',
    color: 'Премиум(Литая+ПВХ) от 180 см',
  },
  
  {
    id: 6,
    name: 'Искуственная елка Victoria Plus с подсветкой',
    href: '/order',
    imageSrc: 'https://elkihome.ru/img/classic/VICTORIAPLUS.jpg',
    imageAlt: "Искуственная елка Victoria Plus 180 см с подсветкой 370 led",
    price: 'от 23900р.',
    color: 'Премиум(Литая+ПВХ) с подсветкой от 180 см',
  },
  {
    id: 7,
    name: 'Искусственная елка Varna',
    href: '/order',
    imageSrc: 'https://elkihome.ru/img/classic/VARNA-min.jpg',
    imageAlt: "Искусственная елка Varna",
    price: 'от 19900р.',
    color: 'Люкс(Литая) от 180 см',
  },

  {
    id: 8,
    name: 'Искусственная елка Parma',
    href: '//order',
    imageSrc: 'https://elkihome.ru/img/classic/PARMA _1_.jpg',
    imageAlt: "Искусственная елка Parma 210 см",
    price: 'от 36900р.',
    color: 'Люкс(Литая) от 210 см',
  },

]

export default function CatalogClassic() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Зеленые ели</h2>

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
