import React, { useEffect, useMemo, useState } from 'react'
import Header from '../../components/Header/Header'
import GeneralDetails from '../../components/nft/GeneralDetails'
import NFTImage from '../../components/nft/NFTImage'
import MakeOffer from '../../components/nft/Purchase'
import EventTable from '../../components/nft/tableActivity/EventTable'

import { useWeb3 } from '@3rdweb/hooks'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { useRouter } from 'next/router'

const style = {
  container: '',
  wrapper: 'mt-6 container mx-auto px-4 text-white',
  wrapContent: 'flex flex-row',
  leftContent: 'basis-1/3',
  rightContent: 'basis-2/3',
  header: 'flex flex-row justify-between items-center ',
  listItemBtn: 'bg-[#2081e2] py-2 px-8 font-bold text-xl',
  nftsTable: 'border border-black rounded mt-5',
}
const nftId = () => {
  const { provider } = useWeb3()
  const [selectedNft, setSelectedNft] = useState()
  const [listings, setListings] = useState([])
  const router = useRouter()

  const nftModule = useMemo(() => {
    if (!provider) return

    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      'https://eth-rinkeby.alchemyapi.io/v2/uOif9D7_gENyLUZDqDQ7aLpE6z_99A2p'
    )
    return sdk.getNFTModule('0x2dB2EaE71362b628214833b1459977BC36bDE42c')
  }, [provider])

  // get all NFTs in the collection
  useEffect(() => {
    if (!nftModule) return
    ;(async () => {
      const nfts = await nftModule.getAll()
      const selectedNftItem = nfts.find((nft) => nft.id === router.query.nftId)

      setSelectedNft(selectedNftItem)
    })()
  }, [nftModule])

  const marketPlaceModule = useMemo(() => {
    if (!provider) return

    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      'https://eth-rinkeby.alchemyapi.io/v2/uOif9D7_gENyLUZDqDQ7aLpE6z_99A2p'
    )

    return sdk.getMarketplaceModule('0x872f23b9B07c7Db7E61d04937be9FBd994609316')
  }, [provider])

  useEffect(() => {
    if (!marketPlaceModule) return
    ;(async () => {
      const result = await marketPlaceModule.buyoutDirectListing({
        listingId: '1',
        quantityDesired: 1,
      })
      console.log(result)
      setListings(await marketPlaceModule.getAllListings())
    })()
  }, [marketPlaceModule])
  return (
    <div className={style.container}>
      <Header />
      <div className={style.wrapper}>
        <div className={style.wrapContent}>
          <div className={style.leftContent}>
            <NFTImage selectedNft={selectedNft} />
          </div>
          <div className={style.rightContent}>
            <GeneralDetails selectedNft={selectedNft} />
            <MakeOffer
              isListed={router.query.isListed}
              selectedNft={selectedNft}
              listings={listings}
              marketPlaceModule={marketPlaceModule}
            />
          </div>
        </div>
        <div className={style.nftsTable}>
          <EventTable />
        </div>
      </div>
    </div>
  )
}

export default nftId
