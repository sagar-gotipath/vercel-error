import clsx from 'clsx'
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'

import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'

import contactSalesData from '../../data/contact/contactSalesData'
import CenterWrapper from '../shared/CenterWrapper'
import { useCallback, useEffect, useState } from 'react'
import Button from '../shared/Button'
import { useRouter } from 'next/router'
import ContainerVertical from '../shared/ContainerVertical'
import { createUserInquery } from '../../lib/utils/wordpress'
import Loader from '../shared/Loader'
import Link from 'next/link'

const defaultUserData = {
  'first-name': '',
  'last-name': '',
  'business-email': '',
  'company-name': '',
  message: '',
  phone: '',
  products: '',
}

export default function ContactSales() {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState('')

  const [userData, setUserData] = useState({ ...defaultUserData })

  const [value, setValue] = useState()

  // for radion button
  // const [activeProduct, setActiveProduct] = useState(0)

  const [activeStatusCheckbox, setActiveStatusCheckbox] = useState(new Array(contactSalesData.length).fill(false))

  const handleActiveStatusCheckbox = (position) => {
    const updatedCheckedState = activeStatusCheckbox.map((item, index) => (index === position ? !item : item))
    setActiveStatusCheckbox(updatedCheckedState)
  }

  // for radio button
  // const handleActiveStatus = (pos) => {
  //   setActiveProduct(pos)
  // }

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    userData.phone = value

    // getting checked products
    // userData.product = contactSalesData[activeProduct].text
    userData.product = contactSalesData
      .map((item, index) => {
        if (activeStatusCheckbox[index]) {
          return item.text
        }
      })
      .filter((item) => item !== undefined)

    const data = new FormData()

    const keys = Object.keys(userData)

    keys.forEach((item) => {
      data.append(item, userData[item])
    })

    // store data in DB
    setIsLoading(true)
    const result = await createUserInquery(data)

    // check if form submission is successful or not

    if (result.status === 200) {
      setIsLoading(false)
      setUserData({ ...defaultUserData })
      setValue('')
      router.push('/thank-you')
    } else {
      setIsError('There is something went wrong')
      setIsLoading(false)
    }

    // reset userData state to default
  }

  return (
    <ContainerVertical>
      <CenterWrapper>
        {isLoading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
            <Loader />
          </div>
        )}
        <div className="max-w-2xl mx-auto">
          <article>
            <h2 className="mb-8 text-4xl font-semibold">Contact Sales</h2>
            <p>What products are you interested in?</p>
          </article>

          <form className="py-6" onSubmit={handleSubmit}>
            <div className="flex flex-wrap items-start gap-4 mb-8">
              {contactSalesData.map((item, index) => {
                return (
                  <label
                    htmlFor={item.id}
                    className={clsx(
                      'hover:bg-neutral-200 active:bg-neutral-400/25 flex items-center justify-between px-3 py-2 space-x-1 border border-neutral-400 rounded-sm cursor-pointer w-[210px]',
                      activeStatusCheckbox[index] && 'bg-neutral-400/25'
                    )}
                    key={index}
                  >
                    <div className="flex items-center space-x-2">
                      <img src={item.icon} alt={item.text} className="w-4" />
                      <span className="capitalize">{item.text}</span>
                    </div>
                    <input
                      type="checkbox"
                      id={item.id}
                      name="product"
                      value={item.text}
                      // checked={activeProduct === index}
                      // onChange={() => handleActiveStatus(index)}
                      checked={activeStatusCheckbox[index]}
                      onChange={() => {
                        handleActiveStatusCheckbox(index)
                      }}
                    />
                  </label>
                )
              })}
            </div>

            <div className="lg:flex lg:space-x-5">
              <InputItem
                type="text"
                label="First Name"
                name="first-name"
                onChange={handleChange}
                value={userData['first-name']}
                isRequired={true}
              />

              <InputItem
                type="text"
                label="Last Name"
                name="last-name"
                subLabel="optional"
                onChange={handleChange}
                value={userData['last-name']}
              />
            </div>

            <InputItem
              type="email"
              label="Business Email"
              name="business-email"
              onChange={handleChange}
              value={userData['business-email']}
              isRequired={true}
            />
            <InputItem
              type="text"
              label="Company Name"
              name="company-name"
              onChange={handleChange}
              value={userData['company-name']}
            />
            <div>
              <label htmlFor="phoneNumber">Mobile Number</label>
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                className="w-full px-3 py-2 mb-4 border rounded-sm border-neutral-400 "
                id="phoneNumber"
                name="phone"
                onChange={setValue}
                country="bd"
              />
            </div>

            <div>
              <label htmlFor="textArea">Message</label>
              <textarea
                rows="5"
                className="w-full px-3 py-2 border rounded-sm border-neutral-400 focus:outline-none"
                name="message"
                onChange={handleChange}
                value={userData.message}
              ></textarea>
            </div>
            <div className="flex justify-end mt-6">
              <Button type="submit">Contact Sales</Button>
            </div>
          </form>
        </div>
      </CenterWrapper>
    </ContainerVertical>
  )
}

const InputItem = ({
  type = 'text',
  label = '',
  name = '',
  onChange = () => {},
  subLabel = '',
  value = '',
  isRequired = false,
}) => {
  const id = name.split(' ')[0]
  return (
    <div>
      <label htmlFor={id}>
        {label} {subLabel && <span className="text-xs">({subLabel})</span>}
      </label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        className="w-full px-3 py-2 mb-4 border rounded-sm border-neutral-400 focus:outline-none"
        value={value}
        id={id}
        required={isRequired}
      />
    </div>
  )
}

// const SelectCountryPhone = ({ onChange = () => {} }) => {
//   const [value, setValue] = useState()
//   return (
//     <>

//   )
// }
