import { useEffect, useState } from "react";
import { HiClipboardDocumentCheck } from "react-icons/hi2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";

const MyBids = () => {
    const { user } = useAuth();
    const [bids, setBids] = useState([]);
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        getData();
    }, [user])

    const getData = async () => {
        const { data } = await axiosSecure(`/my-bids/${user?.email}`)
        setBids(data)
    }
    // handleStatus
    const handleStatus = async (id, status) => {
        const { data } = await axios.patch(
            `${import.meta.env.VITE_API_URL}/bid/${id}`,
            { status }
        )
        console.log(data)
        getData()
    }
    return (
        <section className='container px-4 mx-auto pt-12'>
            <div className='flex items-center gap-x-3'>
                <h2 className='text-lg font-medium text-gray-800 '>My Bids</h2>

                <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                    {bids.length} Bid
                </span>
            </div>

            <div className='flex flex-col mt-6'>
                <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                        <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-200'>
                                <thead className='bg-gray-50'>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <div className='flex items-center gap-x-3'>
                                                <span>Title</span>
                                            </div>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <span>Deadline</span>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <button className='flex items-center gap-x-2'>
                                                <span>Price</span>
                                            </button>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            Category
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            Status
                                        </th>

                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white divide-y divide-gray-200 '>
                                    {bids.map(bid => <tr key={bid._id}>
                                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                            {bid.job_title}
                                        </td>

                                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                            {new Date(bid.deadline).toLocaleDateString()}
                                        </td>

                                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                            ${bid.price}
                                        </td>
                                        <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                            <div className='flex items-center gap-x-2'>
                                                <p
                                                    className={`px-3 py-1 rounded-full text-xs 
                                                    ${bid.category === 'Web Development' && 'text-blue-500 bg-blue-100/60'}
                                                    ${bid.category === 'Graphics Design' && 'text-emerald-500 bg-emerald-100/60'}
                                                    ${bid.category === 'Digital Marketing' && 'text-pink-500 bg-pink-100/60'} `} >
                                                    {bid.category}
                                                </p>
                                            </div>
                                        </td>
                                        <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                                            <div
                                                className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${bid.status === 'Pending' &&
                                                    'bg-yellow-100/60 text-yellow-500'
                                                    } ${bid.status === 'In Progress' &&
                                                    'bg-blue-100/60 text-blue-500'
                                                    } ${bid.status === 'Complete' &&
                                                    'bg-emerald-100/60 text-emerald-500'
                                                    } ${bid.status === 'Rejected' &&
                                                    'bg-red-100/60 text-red-500'
                                                    }`}
                                            >
                                                <span
                                                    className={`h-1.5 w-1.5 rounded-full ${bid.status === 'Pending' && 'bg-yellow-500'
                                                        } ${bid.status === 'In Progress' && 'bg-blue-500'
                                                        } ${bid.status === 'Complete' && 'bg-green-500'} ${bid.status === 'Complete' && 'bg-green-500'
                                                        } ${bid.status === 'Rejected' && 'bg-red-500'} `}
                                                ></span>
                                                <h2 className='text-sm font-normal '>{bid.status}</h2>
                                            </div>
                                        </td>
                                        <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                            <button
                                                disabled={bid.status !== 'In Progress'}
                                                onClick={() => handleStatus(bid._id, 'Complete')}
                                                title='Mark Complete'
                                                className='text-gray-500 text-xl transition-colors duration-200   hover:text-red-500 focus:outline-none disabled:cursor-not-allowed'
                                            >
                                                <HiClipboardDocumentCheck />
                                            </button>
                                        </td>
                                    </tr>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyBids;