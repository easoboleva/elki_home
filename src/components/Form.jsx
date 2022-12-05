import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { redirect } from 'react-router-dom';

const SERVICE_ID = "service_3csx7ik";
const TEMPLATE_ID = "template_qafap4j";
const USER_ID = "ZH7kiDz5oHG5rYV6r";

const handleOnSubmit = (e) => {
  e.preventDefault();
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
    .then((result) => {
      console.log(result.text);
      Swal.fire({
        icon: 'success',
        title: 'Заявка принята'
      })
    }, (error) => {
      console.log(error.text);
      Swal.fire({
        icon: 'error',
        title: 'Ooops, something went wrong',
        text: error.text,
      })
    });
  e.target.reset();

  return Form();
} 
  

function Form() {
  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
                <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                  <div className="sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-center">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-center text-gray-900">
                        Оформление заказа
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="mb-4 text-sm text-gray-500">
                          Введите данные
                        </p>

                        <form className="mt-8 space-y-6" onSubmit={handleOnSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Имя
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Имя"
                />
              </div>
              <div>
                <label htmlFor="tel" className="sr-only">
                  Tel
                </label>
                <input
                  id="tel"
                  name="tel"
                  type="tel"
                  autoComplete="tel"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Номер телефона"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Заказать
              </button>
            </div>
          </form>

                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}




// async function sendForm({request}) {
//   // let formData = new FormData({request});

//   // let response = await fetch("addUser", {
//   //   method: "POST",
//   //   body: formData,
//   // });
//   // let res = await response.json();

//   // if (res.result == "success") {
//   //   console.log("ok");
//   // } else if (res.result == "exist") {
//   //   console.log("not ok");
//   //   return redirect('/catalog');
//   // }
// }

export {handleOnSubmit, Form}
