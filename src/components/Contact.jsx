const features = [
  { name: 'Телефон', description: '+7 (929) 943-23-49' },
  { name: 'Режим работы', description: 'Ежедневно с 10:00 до 21:00' },
  { name: 'Адрес шоу-рума в Москве', description: 'г. Москва, 3-ий Красносельский переулок 19к3' },
  { name: 'Адрес шоу-рума в Санкт-Петербурге', description: 'Санкт-Петербург, Набережная Реки Мойки, д. 112' },
]

export default function Example() {
  return (
    <div >
      <div className="grid items-center max-w-3xl grid-cols-1 px-4 py-0 mx-auto gap-y-8 gap-x-8 sm:px-4 sm:py-2 lg:max-w-4xl lg:grid-cols-2 lg:px-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Контакты</h2>
          <p className="mt-4 text-gray-600">
            Дорогие покупатели, по любым вопросам вы можете связаться с нами по телефону или написать в WhatsApp. Мы с радостью проконсультируем по наличию конкретных елей, отправим вам дополнительные фото/видео понравившихся моделей, забронируем для вас выбранную елочку, оформим заказ/расскажем как попасть в наш шоу-рум и др.
          </p>

          <dl className="grid grid-cols-1 mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="pt-4 border-t border-gray-200">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid items-center max-w-xl px-4 py-16 mx-auto gap-y-2 gap-x-2 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-1 lg:px-8">
        <h3 className="mt-3">Шоу-рум в Москве</h3>
          <iframe className="py-2" src="https://yandex.ru/map-widget/v1/?um=constructor%3A4d002b0fb2edd274adce9bdff120a838777d0c9d6bc116df4cff7401dd9c6efc&amp;source=constructor" width="400" height="300"></iframe>
        <h3>Шоу-рум в Санкт-Петербурге</h3>
          <iframe className="py-2" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aedd67efa3e2159c630342d9f638f0f20018eadd04adaa75dc9251ce4417d7f55&amp;source=constructor" width="400" height="300"></iframe>
        </div>
      </div>
    </div>
  )
}
