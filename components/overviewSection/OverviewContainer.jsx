import { useState } from 'react'
import { FiPlay } from 'react-icons/fi'
import CenterWrapper from '../shared/CenterWrapper'
import ButtonUnderLined from '../shared/ButtonUnderLined'
import OverviewModal from './OverviewModal'
import ContainerVertical from '../shared/ContainerVertical'

export default function OverviewContainer({ overviews, btnLink, btnText, modalContent, thumbnail }) {
  // modal component state and functions
  let [isOpen, setIsOpen] = useState(false)

  // handler function for modal
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <ContainerVertical>
      <CenterWrapper>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-10 md:gap-y-0">
          {/* overview left part */}
          {thumbnail.src ? (
            <>
              <article className="mb-10 lg:mb-0 lg:col-span-2">
                {overviews.map((item, index) => {
                  return (
                    <p className="mb-4 text-base" key={index}>
                      {item}
                    </p>
                  )
                })}
                <ButtonUnderLined link={btnLink}>{btnText}</ButtonUnderLined>
              </article>
              {/* end of overview left part */}
              {/* overview right part */}
              <section className="lg:col-span-1">
                <div className="relative">
                  {/* thumbnail image */}
                  <img src={thumbnail.src} alt={thumbnail.alt} className="block w-full rounded-md" />

                  {/* play button */}
                  {modalContent && (
                    <div className="absolute inset-0 grid cursor-pointer place-items-center" onClick={openModal}>
                      <span>
                        <svg
                          width="61"
                          height="61"
                          viewBox="0 0 61 61"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className=""
                        >
                          <circle cx="30.8032" cy="30.2405" r="30" fill="#2053CD" />
                          <path
                            d="M24.3726 19.0726C24.3726 17.8687 25.7194 17.1553 26.7154 17.8317L43.1578 28.9996C44.0341 29.5948 44.0341 30.8862 43.1578 31.4813L26.7154 42.6492C25.7194 43.3257 24.3726 42.6123 24.3726 41.4084V19.0726Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </div>
                  )}
                </div>
              </section>
            </>
          ) : (
            <article className="mb-10 lg:mb-0 lg:col-span-3">
              {overviews.map((item, index) => {
                return (
                  <p className="mb-4 text-base" key={index}>
                    {item}
                  </p>
                )
              })}
              {btnLink !== null && btnLink && <ButtonUnderLined link={btnLink}>{btnText}</ButtonUnderLined>}
            </article>
          )}
          {/* end of overview right part */}
        </section>
        <OverviewModal onClose={closeModal} isOpen={isOpen}>
          <div className="relative flex flex-col items-center justify-center text-4xl">
            <div
              className="flex items-center justify-center w-full h-full text-center"
              dangerouslySetInnerHTML={{
                __html: modalContent,
              }}
            />
          </div>
        </OverviewModal>
      </CenterWrapper>
    </ContainerVertical>
  )
}

// className="scale-75 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
