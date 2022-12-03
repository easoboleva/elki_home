
const products = [
  {
    id: 1,
    name: 'Искусственная елка Ile Grande',
    href: '#',
    imageSrc: 'https://elki-premium.ru/upload/iblock/a70/tyjieq1lyb1gf3s09ai2lm8svw11157i.jpeg',
    imageAlt: "Искусственная елка Ile Grande",
    price: '15900р.',
    color: 'Заснеженная с натуральной шишкой 180 см',
  },
  {
    id: 2,
    name: 'Искусственная елка Mont Blanc',
    href: '#',
    imageSrc: 'https://elki-premium.ru/upload/iblock/969/vyu67e0nnjibvfc15vqi6cnexicc0pgx.jpeg',
    imageAlt: "Искусственная елка Mont Blanc заснеженная 180 см",
    price: '20900р.',
    color: 'Заснеженная 180 см',
  },
  {
    id: 3,
    name: 'Искусственная елка Saint Paul',
    href: '#',
    imageSrc: 'https://elki-premium.ru/upload/iblock/cd2/ddl49iah12k8h1n4ageom2zl2xcxju4f.jpg',
    imageAlt: "Искусственная елка Saint Paul",
    price: '15900р.',
    color: 'Заснеженная с натуральной шишкой 180 см',
  },
  {
    id: 4,
    name: 'Искусственная елка Bourget',
    href: '#',
    imageSrc: 'https://elki-premium.ru/upload/iblock/db6/zy0ivldna4c667svfdcwhtd0bcsi788c.jpg',
    imageAlt: "Искусственная елка Bourget заснеженная 180 см",
    price: '12900р.',
    color: 'Заснеженная 180 см',
  },
  {
    id: 5,
    name: 'Искусственная елка Corsica',
    href: '#',
    imageSrc: 'https://elki-premium.ru/upload/iblock/406/9vakpluvc9vs6wm5she8mwdmp4vjpm9v.jpg',
    imageAlt: "Искусственная елка Corsica заснеженная 180 см",
    price: '15900р.',
    color: 'Заснеженная 180 см',
  },
  {
    id: 6,
    name: 'Искусственная елка Arona',
    href: '#',
    imageSrc: 'https://elki-premium.ru/upload/iblock/de5/w175wf30ddo8opfzgswelqtz1b9gcret.JPG',
    imageAlt: "Искусственная елка Arona заснеженная 150 см",
    price: '10900р.',
    color: 'Заснеженная 150 см',
  },
  {
    id: 7,
    name: 'Искусственная елка Adele',
    href: '#',
    imageSrc: 'https://elki-premium.ru/upload/resize_cache/iblock/4e4/450_450_140cd750bba9870f18aada2478b24840a/iygm8mokimm0ahby0ecgr4ubinzzq15x.jpg',
    imageAlt: "Искусственная елка Adele заснеженная 120 см",
    price: '10900р.',
    color: 'Заснеженная от 120см',
  },
  {
    id: 8,
    name: 'Искусственная елка Bergamo',
    href: '#',
    imageSrc: 'https://elki-premium.ru/upload/resize_cache/iblock/f61/450_450_140cd750bba9870f18aada2478b24840a/byukt1m8dgfdq0ua58lz1v6vd286cpdi.jpg',
    imageAlt: "Искусственная елка Bergamo заснеженная",
    price: '10900р.',
    color: 'Заснеженная от 150см',
  },
]

export default function Shop() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
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
    </div>
  )
}
