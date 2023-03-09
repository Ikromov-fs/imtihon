import React, { Component } from 'react';

export default class modal extends Component {
    render() {
        const { openModal, form, value } = this.props
        return (
            <div className={`${openModal ? "bg-[#fcfaf5]" : "hidden"} `}>
                <div className='relative left-[35%] top-[15vh]'>
                    <div className='absolute w-[500px] h-[200px] bg-slate-600 py-2 px-1 rounded-xl'>
                        <form id={'form'} className='form' onSubmit={form} >
                            <input defaultValue={value.text} className='text-lg rounded-xl px-5 border-2 py-5 w-[100%] border-solid border-[#333]' type="text" placeholder='add user' required />
                            <div className='mt-3'>
                                <select defaultValue={value.title} className='w-1/2 flex justify-center mx-auto py-2 rounded-md'>
                                    <option value="Inproge">inproge</option>
                                    <option value="open">open</option>
                                    <option value="pending">pending</option>
                                    <option value="progress">progress</option>
                                </select>
                            </div>
                        </form>
                        <div className='flex '>
                            <button  form={'form'} type='submit' className='mx-auto mt-4  block active:transform active:scale-95 active:bg-transparent active:text-black text-white border-2 border-b-gray-600 bg-green-900 px-8 py-2 rounded-md border-none'>save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
