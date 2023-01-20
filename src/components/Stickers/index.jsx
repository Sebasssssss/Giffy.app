import { AnimatePresence } from 'framer-motion'
import React from 'react'
import Modal from '../../components/Stickers/Modal'
import useModal from '../../hooks/useModal'

function Stickers({ title, id, url }) {
  const { isModalOpen, close, open } = useModal()
  return (
    <>
      <div
        className="mb-4 flex cursor-pointer items-center overflow-hidden rounded-md border border-blue-900/20 text-center shadow-card transition-all duration-200 hover:shadow-cardHover dark:border-[#3E2C41] dark:shadow-cardDark dark:hover:shadow-cardDarkHover"
        onClick={() => (isModalOpen ? close() : open())}
      >
        <img
          src={url}
          loading="lazy"
          decoding="async"
          className="h-80 w-full object-cover md:h-44"
        />
      </div>
      <AnimatePresence exitBeforeEnter={true} initial={false}>
        {isModalOpen && (
          <Modal handleClose={close}>
            <img
              key={id}
              src={url}
              loading="lazy"
              decoding="async"
              className="w-80 rounded-xl object-cover"
            />
          </Modal>
        )}
      </AnimatePresence>
    </>
  )
}

export default React.memo(Stickers)
