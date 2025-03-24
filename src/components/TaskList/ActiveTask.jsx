import React from 'react'

const AcceptTask = ({data}) => {
    return (
        <div className='min-w-[400px] max-w-[400px] p-3 border-blue-600 border-2 rounded-lg flex flex-col justify-between'>
            <div className='flex justify-between items-center'>
                <h3 className='font-bold bg-[rgb(30,30,30)] p-2 rounded-lg'>{data.category}</h3>
                <h4 className='font-bold bg-[rgb(30,30,30)] p-2 rounded-lg'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-3 text-2xl font-bold bg-[rgb(30,30,30)] p-2 rounded-lg text-center'>{data.taskTitle}</h2>
            <p className='mt-3 h-[100px] font-bold bg-[rgb(30,30,30)] p-2 rounded-lg'>{data.taskDescription}</p>
            <div className='flex justify-between mt-3 gap-3'>
                <button className='w-1/2 font-bold bg-[rgb(30,30,30)] p-2 rounded-lg hover:bg-indigo-900'>COMPLETED</button>
                <button className='w-1/2 font-bold bg-[rgb(30,30,30)] p-2 rounded-lg hover:bg-indigo-900'>FAILED</button>
            </div>
        </div>
    )
}

export default AcceptTask