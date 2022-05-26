import { useWeb3 } from '@3rdweb/hooks'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import { useEffect } from 'react'
import { client } from '../lib/sanityClient'
import toast, { Toaster } from 'react-hot-toast'
const style = {
  wrapper: ' flex flex-col h-screen w-screen bg-[#3b3d42]',
  walletConnectWrapper: 'flex flex-1 flex-col items-center justify-center',
  button: 'px-5 py-3 bg-blue-400 rounded-[10px] font-bold',
  details: 'font-bold mt-4',
}

export default function Home() {
  const { address, connectWallet } = useWeb3()
  const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(`Welcome back${userName !== 'Unnamed' ? ` ${userName}` : ''}!`, {
      style: {
        background: '#04111d',
        color: '#fff',
      },
    })
  }
  useEffect(() => {
    if (!address) return
    ;(async () => {
      const userDoc = {
        _type: 'users',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address,
      }
      const result = await client.createIfNotExists(userDoc)
      welcomeUser(result.userName)
    })()
  }, [address])
  return (
    <div className={style.wrapper}>
      <Toaster position="top-center" reverseOrder={false} />
      {address ? (
        <>
          <Header />
          <Hero />
        </>
      ) : (
        <div className={style.walletConnectWrapper}>
          <button className={style.button} onClick={() => connectWallet('injected')}>
            Connect Wallet
          </button>
          <div className={style.details}>
            You need Chrome to be <br /> able to run this app.
          </div>
        </div>
      )}
    </div>
  )
}
