import { AnimatePresence } from 'framer-motion'
import React from 'react'
import Modal from '../../components/Stickers/Modal'
import useModal from '../../hooks/useModal'

function Stickers({ title, id, url }) {
  const { isModalOpen, close, open } = useModal()
  return (
    <>
      <div
        className="relative mb-4 h-80 overflow-hidden rounded-[1rem] border border-slate-700 text-center text-text shadow-md shadow-slate-700 md:h-44"
        onClick={() => (isModalOpen ? close() : open())}
      >
        <img src={url} className="h-full w-full object-cover" alt={title} />
        <h1 className="text-md absolute -bottom-1 left-0 w-full bg-slate-900/40 py-1.5 font-bold backdrop-blur-md">
          {title}
        </h1>
      </div>
      <AnimatePresence mode="wait" initial={false}>
        {isModalOpen && (
          <Modal handleClose={close}>
            <div className="flex flex-col items-center">
              <img
                key={id}
                src={url}
                alt={title}
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
