import React from 'react'
import { IoMdSnow } from 'react-icons/io'
import { AiOutlineHeart } from 'react-icons/ai'

const style = {
  heartHeader: 'flex basis-1/3 justify-between',
  topBar: `bg-[#303339] p-2 rounded-t-lg border-[#151c22] border`,
  topBarContent: `flex items-center`,
  likesCounter: `flex-1 flex items-center justify-end`,
}
const NFTImage = ({ selectedNft }) => {
  return (
    <>
      <div className={style.heartHeader}>
        <IoMdSnow />
        <div className={style.likesCounter}>
          <AiOutlineHeart />
          2.3K
        </div>
      </div>
      <img src={selectedNft?.image} />
    </>
  )
}

export default NFTImage
