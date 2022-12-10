/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

const product = {
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],

}

export default function Galery() {

  return (
    <div className="bg-white">
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
    </div>
  )
}