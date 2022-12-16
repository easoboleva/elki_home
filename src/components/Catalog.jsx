
const products = [
  {
    id: 1,
    name: 'Искусственная елка заснеженная с натуральной шишкой Ile Grande',
    href: '/product',
    imageSrc: 'https://elkihome.ru/img/ilegrande/3-main.png',
    imageAlt: "Искусственная елка Ile Grande",
    price: 'от 15900р.',
    color: 'Премиум(Литая+ПВХ) от 180 см',
  },
  {
    id: 5,
    name: 'Искусственная елка Corsica',
    href: '/product5',
    imageSrc: 'https://elkihome.ru/img/corsica/corsica-min.png',
    imageAlt: "Искусственная елка Corsica заснеженная 180 см",
    price: 'от 15900р.',
    color: 'Премиум(Литая+ПВХ) от 180 см',
  },
  {
    id: 3,
    name: 'Искусственная елка заснеженная с натуральной шишкой Saint Paul',
    href: '/product3',
    imageSrc: 'https://elkihome.ru/img/saintpaul/saintpaul2-min.png',
    imageAlt: "Искусственная елка Saint Paul",
    price: 'от 15900р.',
    color: 'Премиум(Литая+ПВХ) от 180 см',
  },
  {
    id: 2,
    name: 'Искусственная елка Mont Blanc',
    href: '/product2',
    imageSrc: 'https://elkihome.ru/img/montblanc/montblanc1-min.png',
    imageAlt: "Искусственная елка Mont Blanc заснеженная 180 см",
    price: 'от 20900р.',
    color: 'Премиум(Литая+ПВХ) от 180 см',
  },
  {
    id: 4,
    name: 'Искусственная елка Geneva',
    href: '/product4',
    imageSrc: 'https://elkihome.ru/img/geneva/DSC_0730 _1_.jpg',
    imageAlt: "Искусственная елка Geneva заснеженная",
    price: 'от 14900р.',
    color: 'Премиум(Литая+ПВХ) от 150 см',
  },
  {
    id: 6,
    name: 'Искусственная елка Arona',
    href: '/product6',
    imageSrc: 'https://elkihome.ru/img/arona/arona-min.jpg',
    imageAlt: "Искусственная елка Arona заснеженная от 150 см",
    price: 'от 10900р.',
    color: 'Премиум(Литая+ПВХ) от 150 см',
  },
  {
    id: 7,
    name: 'Искусственная елка Adele',
    href: '/product7',
    imageSrc: 'https://elkihome.ru/img/adele/adele.png',
    imageAlt: "Искусственная елка Adele заснеженная 120 см",
    price: 'от 7900р.',
    color: 'Премиум(Литая+ПВХ) от 120см',
  },
  {
    id: 8,
    name: 'Искусственная елка Bergamo',
    href: 'product8',
    imageSrc: 'https://elkihome.ru/img/bergamo/bergamo-min.png',
    imageAlt: "Искусственная елка Bergamo заснеженная",
    price: 'от 13900р.',
    color: 'Премиум(Литая+ПВХ) от 150см',
  },
]

export default function Catalog() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Заснеженные ели</h2>

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