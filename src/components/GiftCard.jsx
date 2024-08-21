import React from 'react'
import Layout from './Layout'
import giftCardBorderTop from '../assets/giftCardBorderTop.svg'
import giftCardBorderBottom from '../assets/giftCardBorderBottom.svg'
import giftCardImg from '../assets/giftCardImg.png'
import { Button } from "@material-tailwind/react";
import { useLanguage } from '../LanguageContext';

const GiftCard = () => {
    const { translations } = useLanguage();
    return (
        <section id={"gift"} className='h-fit bg-gradient-to-b from-opacity-50 from-softPurple to-softPurple/70'>
            <img className='w-full' src={giftCardBorderBottom} alt="" />
            <Layout className={'flex flex-col md:flex-row items-center py-10 lg:py-14'}>
                <div className='w-full text-center lg:w-1/2 md:pr-8 md:text-start'>
                    <h2 className='mb-6 text-5xl font-semibold leading-tight text-white lg:text-6xl lg:leading-tight font-display'>
                        Gift Card
                    </h2>
                    <p className='mb-8 font-poppins font-normal text-base text-white w-full lg:w-[85%]'>
                        {translations.gift.contentCard}
                    </p>
                    <a href="https://api.whatsapp.com/send?phone=5491164606306" target="_blank" rel="noopener noreferrer">
                        <Button className="px-5 py-3 text-base font-semibold capitalize bg-white font-poppins text-softPurple hover:shadow-softPurple/60">
                            {translations.gift.button}
                        </Button>
                    </a>
                </div>
                <figure className='w-[90%] lg:w-1/2 md:px-8 mt-8'>
                    <img className='drop-shadow-sm shadow-softPurple' src={giftCardImg} alt="" />
                </figure>
            </Layout>
            <img className='w-full ' src={giftCardBorderTop} alt="" />
        </section>
    )
}

export default GiftCard
