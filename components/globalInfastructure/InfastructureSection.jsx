import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import setupGlobe from '../../lib/globe/setupGlobe'
import ContainerVertical from '../shared/ContainerVertical'
import Title from '../shared/Title'

export default function InfastructureWrapper({ title, description, globalNetworkLink, locationItems }) {
  const infastructureData = [
    {
      title: "CDN PoP's",
      totalCount: 100,
      plus: true,
    },
    {
      title: "Partner CDN PoP's",
      totalCount: 1500,
      plus: true,
    },
    {
      title: 'Overseas data centers',
      totalCount: 21,
      plus: false,
    },
  ]

  useEffect(() => {
    if (!window.isGlobeDisplayed) {
      setupGlobe(locationItems)
      window.isGlobeDisplayed = true
    }
  }, [])
  //
  return (
    <ContainerVertical>
      <Head>
        <link href="/lib/globe/3dglobes.min.css" rel="stylesheet" />
        <link href="/lib/globe/webflow.min.css" rel="stylesheet" />
      </Head>

      <section className="w-full max-w-screen-xl mx-auto sm:px-6 md:px-12">
        <section className="grid grid-cols-1 py-10 lg:grid-cols-2 gap-x-6">
          <article className="px-4 mb-10 md:mb-3 md:px-0">
            <div className="mb-10 text-center md:text-left">
              <Title>{title}</Title>
              <div className="text-base">{description}</div>
            </div>
            <article className="hidden md:block">
              <h4 className="mb-4 text-base font-semibold capitalize">Infrastructure details</h4>
              {infastructureData.map((item, index) => {
                return (
                  <p key={index} className="mb-3 text-base">
                    {' '}
                    {item.title}: {item.totalCount}
                    {item.plus ? '+' : ''}
                  </p>
                )
              })}

              {/* global network link button */}

              <Link href={globalNetworkLink}>
                <a className="pb-0.5 border-b-2 text-mariner-900 border-b-mariner-900">Check our global network</a>
              </Link>

              {/* end of global network link button */}

              <div className="mt-20">
                <p className="items-center mb-5 text-base capitalize flext">
                  <span className="inline-block w-2 h-2 mr-2.5 rounded-full bg-mariner-900"></span>
                  gotipath cloud AZ
                </p>
                <p className="text-base capitalize">
                  <span className="inline-block w-2 h-2 mr-2.5 bg-orange-500 rounded-full"></span>
                  partner AZ
                </p>
              </div>
            </article>
          </article>

          {/* globe content start */}

          <div
            className="relative overflow-hidden lg:py-1 md:py-20 py-10 after:content-[''] after:w-full after:h-full
                     after:bg-transparent after:z-[50] after:absolute after:inset-0 md:after:z-[-10]"
          >
            <section className="">
              <img
                src="/images/globe_shadow.png"
                alt="shadow image"
                className="absolute md:-right-5 lg:scale-[.66] md:scale-[.67]"
              ></img>
            </section>

            <section className="relative md:-top-2 z-40 scale-[2.3] pt-20 pb-8 md:scale-[1.5] md:pt-24 md:pb-16 lg:pt-16 lg:pb-0 lg:scale-150">
              <div
                fs-3dglobe-element="container"
                // fs-3dglobe-img="https://i.ibb.co/HGGFHfW/Frame-14.png"
                fs-3dglobe-img="/images/mapbd.svg"
                className=" fs-3dglobe-container"
              >
                <div className="collection-list-wrapper w-dyn-list">
                  <div fs-3dglobe-element="list" role="list" className="collection-list w-dyn-items">
                    {/* locations card */}
                    {locationItems.map((item, index) => {
                      return <PinLocation key={index} {...item} />
                    })}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* end of globe content */}
        </section>
      </section>
    </ContainerVertical>
  )
}

const PinLocation = ({ locationName, geoPin }) => {
  const { latitude, longitude } = geoPin

  return (
    <div role="listitem" className="w-dyn-item">
      <div fs-3dglobe-element="pin" className="globe-pin">
        <div className="relative w-0.5 h-0.5 p-1 bg-blue-700 rounded-full">
          <div className="absolute inset-0 w-3 h-3 m-auto bg-blue-700 rounded-full animate-ping"></div>
        </div>
      </div>
      <div fs-3dglobe-element="tooltip" className="globe-tooltip">
        <div className="location-name">{locationName}</div>
      </div>
      <div fs-3dglobe-element="lat" className="lat">
        {latitude}
      </div>
      <div fs-3dglobe-element="lon" className="lon">
        {longitude}
      </div>
    </div>
  )
}

// globe section = relative z-40 scale-[2.3] pt-16 pb-12 md:scale-[1.6] md:pt-24 md:pb-16 lg:pt-16 lg:pb-0 lg:scale-150
