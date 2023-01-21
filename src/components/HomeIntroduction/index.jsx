import React from 'react'
import { IoArrowForward } from 'react-icons/io5'

function HomeIntroduction() {
  return (
    <p className="mx-auto rounded pt-4 pb-10">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti id
      nihil, at dolorum eaque maiores quia amet sit eius libero nulla ipsam
      perferendis consectetur obcaecati fugiat, odio quas non facere dicta nisi
      nobis accusantium! doloribus libero inventore delectus animi quasi
      perferendis consectetur obcaecati fugiat, odio quas non facere dicta nisi
      nobis accusantium! doloribus libero inventore delectus animi quasi
      voluptatibus possimus excepturi,{' '}
      <span className="inline-flex items-center gap-1 text-lightcoral transition-colors duration-500 dark:text-[#6e85b2]">
        {' '}
        voluptates et distinctio. Repellat?
        <IoArrowForward />
      </span>
    </p>
  )
}

export default React.memo(HomeIntroduction)
