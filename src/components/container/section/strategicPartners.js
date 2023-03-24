import React from 'react'

export default function StrategicPartners() {
    const avalanche = require('../assets/avalanche.png')
    const ethereum = require('../assets/ethereum.png')
    const polygon = require('../assets/polygon.png')
    const solana = require('../assets/solana.png')
    const tezos = require('../assets/tezos.png')
    const xpr = require('../assets/xpr.png')
  return (
    <div className='section-6' id='mint_marketplace'>
        <div className='container-6'>
            <div>
                <div className='content-block'>
                    <h2 className='h2-6'>Strategic Partners</h2>
                    <p className='p-6'>We are grateful to our partners and advisors who have advised and guided us throughout our journey.</p>
                </div>
                <div className='strategic-partner'>
                    <div className='logo-container'>
                        <div className='logo'>
                            <img className='logo-img' src={ethereum} alt='' ></img>
                        </div>
                    </div>
                    <div className='logo-container'>
                        <div className='logo'>
                            <img className='logo-img' src={solana} alt='' ></img>
                        </div>
                    </div>
                    <div className='logo-container'>
                        <div className='logo'>
                            <img className='logo-img' src={avalanche} alt='' ></img>
                        </div>
                    </div>
                    <div className='logo-container'>
                        <div className='logo'>
                            <img className='logo-img' src={xpr} alt='' ></img>
                        </div>
                    </div>
                    <div className='logo-container'>
                        <div className='logo'>
                            <img className='logo-img' src='https://cdn.guardianlink.io/product-hotspot/images/client/5_polygon.png' alt='' ></img>
                        </div>
                    </div>
                    <div className='logo-container'>
                        <div className='logo'>
                            <img className='logo-img' src={tezos} alt='' ></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
