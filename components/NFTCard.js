import React, { useEffect, useState } from 'react'
import { BiHeart } from 'react-icons/bi'
import Router from 'next/router'
const style = {
  wrapper: `bg-[#303339] w-[14rem] h-[22rem] my-10 mx-5 rounded-2xl overflow-hidden cursor-pointer`,
  imageContainer: `h-2/3 w-full overflow-hidden flex justify-center items-center`,
  nftImage: `w-full object-cover`,
  info: 'text-[#e4e8eb] flex justify-between items-start',
  assetName: 'font-bold text-lg mt-2',
  likes: 'flex justify-end mt-2',
  details: 'p-4',
  ethLogo: 'w-[15px]',
  priceValue: 'flex mt-2 font-bold',
  priceTag: 'text-[#8a939b]',
  likeIcon: 'w-[20px] text-[#8a939b]',
}
const NftCard = ({ nftItem, title, listings }) => {
  const [price, setPrice] = useState(0)
  useEffect(() => {
    const listing = listings.find((e) => (e.asset.id = nftItem.id))
    if (Boolean(listing)) {
      setPrice(listing.buyoutCurrencyValuePerToken.displayValue)
    }
  }, [nftItem, listings])
  const onNFTDetail = () => {
    Router.push({ pathname: `/nfts/${nftItem.id}`, query: { isListed: price > 0 } })
  }
  return (
    <div className={style.wrapper} onClick={onNFTDetail}>
      <div className={style.imageContainer}>
        <img src={nftItem.image} alt={nftItem.name} className={style.nftImage} />
      </div>
      <div className={style.details}>
        <div className={style.info}>
          <div className={style.infoLeft}>
            <div className="text-[#8a939b]">{title}</div>
            <div className={style.assetName}>{nftItem.name}</div>
          </div>
          {price > 0 && (
            <div className={style.infoRight}>
              <div className={style.priceTag}>Price</div>
              <div className={style.priceValue}>
                <img
                  src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
                  alt="eth"
                  className={style.ethLogo}
                />
                <div className="ml-1">{price}</div>
              </div>
            </div>
          )}
        </div>
        <div className={style.likes}>
          <span className={style.likeIcon}>
            <BiHeart />
          </span>
          {nftItem.likes}
        </div>
      </div>
    </div>
  )
}

export default NftCard
