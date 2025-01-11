import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { RiDeleteBinLine } from "react-icons/ri"
import { FaRegEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const MyPostedJob = () => {
    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {

    }, [user])

    const getData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/jobs/${user?.email}`)
        setJobs(data)
    }
    getData()

    const handleDelete = async id => {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/jobs/${id}`)
            console.log(data);
            toast.success("Delete Successfully")

            // refresh ui
            getData()
        }
        catch (err) {
            console.log(err.message);
            toast.error(err.message)
        }
    }
    return (
        <section className='container px-4 mx-auto pt-12'>
            <div className='flex items-center gap-x-3'>
                <h2 className='text-lg font-medium text-gray-800 '>My Posted Jobs</h2>

                <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                    {jobs.length} Jobs
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
                                                <span>Price Range</span>
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
                                            Description
                                        </th>

                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            Edit
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white divide-y divide-gray-200 '>

                                    {jobs.map(job => <tr key={job._id}>
                                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                            {job.job_title}
                                        </td>

                                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                            {new Date(job.deadline).toLocaleDateString()}
                                        </td>

                                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                            ${job.minPrice}-${job.maxPrice}
                                        </td>
                                        <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                            <div className='flex items-center gap-x-2'>
                                                <p
                                                    className='px-3 py-1 rounded-full text-blue-500 bg-blue-100/60
                             text-xs'
                                                >
                                                    {job.category}
                                                </p>
                                            </div>
                                        </td>
                                        <td
                                            title=''
                                            className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'
                                        >
                                            {job.description.slice(0, 40)}...
                                        </td>
                                        <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                            <div className='flex items-center gap-x-6'>
                                                <button onClick={() => handleDelete(job._id)} className='text-2xl text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none'>
                                                    <RiDeleteBinLine />
                                                </button>
                                                <Link to={`/update/${job._id}`}>
                                                    <button className='text-2xl text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none'>
                                                        <FaRegEdit />
                                                    </button>
                                                </Link>
                                            </div>
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

export default MyPostedJob;