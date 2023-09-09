import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';

const Ecommerce = () => {
    return (
        <div className='mt-12'>
            <div className='flex flex-wrap lg:flex-nowrap justify-center'>
                <div className={`bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center bg-[url("https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]`}>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-bold text-gray-700'>Earnings</p>
                            <p className='text-2xl'>$63,448.7</p>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <Button
                            color='white'
                            bgColor='blue'
                            text="Download"
                            borderRadius='10px'
                            size="5px"
                        />
                    </div>
                </div>
                <div className='flex m-3 flex-wrap justify-between gap-1 items-center w-full'>
                    {earningData.map((item) => (
                        <div key={item.title} className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
                            <button type='button'
                                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
                            >
                                {item.icon}
                            </button>
                            <p className='mt-3'>
                                <span className='text-lg font-semibold'>{item.amount}</span>
                                <span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
                            </p>
                            <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex gap-10 flex-wrap justify-between'>
                <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl w-full'>
                    <div className='flex justify-between'>
                        <p className='font-semibold text-xl'>Revenue Updates</p>
                        <div className='flex items-center gap-4'>
                            <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                                <span><BsCurrencyDollar /></span>
                                <span>Expense</span>
                            </p>
                            <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                                <span><BsCurrencyDollar /></span>
                                <span>Budget</span>
                            </p>
                        </div>
                    </div>
                    <div className='mt-3 flex gap-10 flex-wrap justify-between'>
                        <div className='m-4'>
                            <div>
                                <p>
                                    <span className='text-3xl font-semibold'>$93,438</span>
                                    <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>25%</span>
                                </p>
                                <p className='text-gray-500 mt-1'>Budget</p>
                                <span className='text-gray-500 text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis possimus nulla autem nostrum deleniti fugiat suscipit dolor, consequuntur repellat! Dolor nam animi doloribus aperiam labore praesentium voluptas, sunt nulla, odio quia cumque nihil dignissimos officiis excepturi minima quis modi quos illo, sequi repellat! Mollitia fuga corporis nulla nihil. Similique iste error maiores, eos aliquam dicta ullam ipsum eligendi nulla earum tempora nam dolores nostrum asperiores! Sed alias impedit, cupiditate velit cum sequi sit doloremque minima veniam quos aut, facere fugit veritatis repellendus voluptatem eius dolores, quibusdam quae. Temporibus dicta porro et dolorum non aliquid nesciunt, ipsam rem dolores cum? Sint.</span>
                            </div>
                            <div className='mt-8'>
                                <p>
                                    <span className='text-3xl font-semibold'>$48,000</span>
                                </p>
                                <p className='text-gray-500 mt-1'>Expense</p>
                                <span className='text-gray-500 text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis possimus nulla autem nostrum deleniti fugiat suscipit dolor, consequuntur repellat! Dolor nam animi doloribus aperiam labore praesentium voluptas, sunt nulla, odio quia cumque nihil dignissimos officiis excepturi minima quis modi quos illo, sequi repellat! Mollitia fuga corporis nulla nihil. Similique iste error maiores, eos aliquam dicta ullam ipsum eligendi nulla earum tempora nam dolores nostrum asperiores! Sed alias impedit, cupiditate velit cum sequi sit doloremque minima veniam quos aut, facere fugit veritatis repellendus voluptatem eius dolores, quibusdam quae. Temporibus dicta porro et dolorum non aliquid nesciunt, ipsam rem dolores cum? Sint.</span>
                            </div>
                        </div>
                        {/* <div className='mt-5'>
                                <SparkLine />
                            </div> */}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Ecommerce