import React from 'react'
import Modal from '../../components/Stickers/Modal'
import useModal from '../../hooks/useModal'

function Stickers({ title, id, url }) {
  const { isModalOpen, close, open } = useModal()
  return (
    <>
      <li
        className="samina mb-4 rounded-md text-center transition-all duration-200"
        onClick={() => (isModalOpen ? close() : open())}
      >
        <img
          src={url}
          loading="lazy"
          decoding="async"
          className="h-80 w-full object-cover md:h-44"
        />
      </li>
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
    </>
  )
}

export default React.memo(Stickers)
