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
      <AnimatePresence mode="wait" initial={false}>
        {isModalOpen && (
          <Modal handleClose={close}>
            <div className="flex flex-col items-center">
              <img
                key={id}
                src={url}
                loading="lazy"
                decoding="async"
                className="w-72 rounded-xl object-cover"
              />
              <h1 className="py-2 text-xl font-bold">{title}</h1>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  )
}

export default React.memo(Stickers, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id
})
