import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { MdRefresh } from 'react-icons/md'
import { RiShareBoxLine } from 'react-icons/ri'
import { FiMoreVertical } from 'react-icons/fi'
import { GiShare } from 'react-icons/gi'

const style = {
  icons: 'flex justify-end',
  iconHeader: 'border p-2 first:rounded-l-lg last:rounded-r-lg',
}
const GeneralDetails = ({ selectedNft }) => {
  return (
    <>
      <div className="flex justify-between pl-5">
        <span className="text-[#3730a3]">Bored Ape Yacht Club</span>
        <div className={style.icons}>
          <span className={style.iconHeader}>
            <AiFillHeart />
          </span>
          <span className={style.iconHeader}>
            <MdRefresh />
          </span>
          <span className={style.iconHeader}>
            <RiShareBoxLine />
          </span>
          <span className={style.iconHeader}>
            <FiMoreVertical />
          </span>
          <span className={style.iconHeader}>
            <GiShare />
          </span>
        </div>
      </div>
      <div className="text-2xl font-bold">{selectedNft?.name}</div>
      <div className="py-5">
        <span>
          Owned by <span className="text-[#3730a3] "> e88vault</span>{' '}
        </span>
        <span>2.3K favorites</span>
      </div>
    </>
  )
}

export default GeneralDetails
