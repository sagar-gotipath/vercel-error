import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import CenterWrapper from '../shared/CenterWrapper'
import Title from '../shared/Title'
import SectionTitle from '../shared/SectionTitle'
import ContainerVertical from '../shared/ContainerVertical'

export default function Feature1Wrapper({ featureData, title, description }) {
  // references of articles for observation
  const blogsParentRef = useRef()
  const blogsRef = useRef([])
  const imgRef = useRef([])

  // array of images
  const imagesArr = featureData.map((item) => item.image)

  // useEffect
  useEffect(() => {
    // if ()

    const options = {
      // rootMargin: blogsParentRef.current,
      rootMargin: '0px',
      threshold: 0.7,
    }

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          imgRef.current.forEach((item) => {
            if (item.id === entry.target.id) {
              item.className = 'lg:absolute lg:visible lg:transition lg:duration-1000 lg:opacity-1'
            } else {
              item.className = 'lg:absolute lg:invisible lg:transition lg:duration-1000 lg:opacity-0'
            }
          })

          blogsRef.current.forEach((item) => {
            if (item.id === entry.target.id) {
              item.className = 'py-64 lg:visible lg:opacity-1 last:py-56'
            } else {
              item.className = 'py-64 lg:invisible lg:opacity-0 last:py-56'
            }
          })
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, options)

    // observer.observe(blogsParentRef.current);
    if (blogsRef.current.length > 0) {
      blogsRef.current.forEach((item) => observer.observe(item))
    }
  }, [])

  return (
    <CenterWrapper>
      <div className="hidden lg:block">
        <section className="relative grid items-start grid-cols-1 md:grid-cols-2 gap-x-44">
          <section className="lg:sticky lg:top-0">
            <article className="py-28">
              <Title>{title}</Title>
              <div className="mb-10 text-base">{description}</div>

              {/*  */}

              <div className="relative h-96">
                <section className="absolute inset-0">
                  {imagesArr.map((item, index) => (
                    <img
                      key={index}
                      alt={`feature image${index}`}
                      src={item}
                      className={`absolute duration-150 w-full block
                  ${index == 0 ? 'opacity-1 visible' : 'opacity-0 invisible'}                
                  `}
                      ref={(el) => (imgRef.current[index] = el)}
                      id={index + 1}
                    />
                  ))}
                </section>
              </div>

              {/*  */}
            </article>
          </section>
          <section className="pt-36" ref={blogsParentRef}>
            {featureData.map((item, index) => {
              return (
                <article
                  key={index}
                  className={`duration-500 py-64 ${
                    index == 0 ? 'opacity-1 visible' : 'opacity-0 invisible'
                  } last:py-24`}
                  ref={(el) => (blogsRef.current[index] = el)}
                  id={index + 1}
                >
                  <div className="mb-5 text-2xl font-semibold capitalize ">{item.title}</div>
                  <div className="text-base text-neutral-600 ">{item.subTitle}</div>
                </article>
              )
            })}
          </section>
        </section>
      </div>
      <section className="mb-6 lg:hidden">
        <SectionTitle title={title} description={description}></SectionTitle>

        {/*  */}
        {featureData.map((item, index) => {
          return (
            <section key={index} className="flex flex-col mt-12">
              {/* <Image src={item.image} layout="fill" ></Image> */}
              <img src={item.image} alt={`feature image-${index + 1}`} className="inline-block w-full mb-5" />

              <article>
                <div className="mb-5 text-lg font-semibold capitalize animate-slideUp ">{item.title}</div>
                <div className="pb-10 text-base text-neutral-600 animate-slideUpDelay">{item.subTitle}</div>
              </article>
            </section>
          )
        })}
      </section>
    </CenterWrapper>
  )
}
