import React from 'react';
import './App.css';
import Modal from './companets/modal/modal';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { id: 1, title: 'Inproge', text: 'Tasc1', },
        { id: 2, title: 'open', text: 'Tasc2', },
        { id: 3, title: 'pending', text: 'Tasc3', },
        { id: 4, title: 'progress', text: 'Tasc4', },
      ],
      openModal: false,
      value: ''
    }
  }
  delete = (item) => {
    const { data } = this.state
    const newData = data.filter((elm) => elm.id !== item.id)
    this.setState({
      data: newData
    })
  }
  edid = (item) => {
    this.setState({
      value: item,
      openModal: true,
    })
  }
  form = (e) => {
    e.preventDefault()
    let title = e.target[1].value
    let text = e.target[0].value
    let id = this.state.value.id
    if (this.state.value !== '') {
      this.state.data.map(item => {
        if (item.id === id) {
          item.title = title
          item.text = text
        }
      })
    } else {
      this.state.data.push({ id: this.state.data.length + 1, title, text })
    }
    this.setState({
      data: this.state.data,
    })
    this.setState({ openModal: false, });

    e.target[0].value = ''
  }
  render() {
    const { data, openModal, value } = this.state
    return (
      <div className='container w-full mx-auto relative'>
        <div>
          <Modal value={value} select={this.select} form={this.form} openModal={openModal} />
        </div>
        <div className='grid grid-cols-4 mt-6 gap-6'>
          <div className='w-[100%]  text-center   border-[1.9px]  '>
            <h1 className='text-3xl text-black font-bold py-2 bg-[#fcfaf5]'>Inproge</h1>
            {
              data.filter((item) => item.title === 'Inproge').map((item) => (
                <div>
                  <ul className='items-center bg-[#868181] '>
                    <li className='flex items-center gap-24 pl-12'>
                      <p className='text-xl font-bold my-5'>{item.text}</p>
                      <div className='flex'>
                        <button onClick={() => this.edid(item)} className='active:transform active:scale-95 active:bg-transparent active:text-black text-white mx-1 border-2 border-b-gray-600 bg-green-600 px-3 py-1 rounded-md border-none '>edit</button>
                        <button onClick={() => this.delete(item)} className='active:transform active:scale-95 active:bg-transparent active:text-black text-white mx-1 border-2 border-b-gray-600 bg-red-900 px-3 py-1 rounded-md border-none '>delete</button>
                      </div>
                    </li>
                  </ul>
                </div>
              ))
            }
            <div className='bg-[#fcfaf5]'>
              <button onClick={() => this.setState({ openModal: true })} className='active:transform active:scale-95 active:bg-transparent active:text-black text-white mx-1 my-5 border-2 border-b-gray-600 bg-green-900 px-3 py-1 rounded-md border-none'>add user</button>
            </div>
          </div>
          <div className='w-[100%]   text-center  border-[1.9px] '>
            <h1 className='text-3xl text-black font-bold py-2 bg-[#fcfaf5]'>open</h1>
            {
              data.filter((item) => item.title === 'open').map((item) => (
                <div>
                  <ul className='items-center  px-5 bg-[#868181] '>
                    <li className='flex items-center gap-24 pl-12'>
                      <p className='text-xl font-bold my-5'>{item.text}</p>
                      <div className='flex'>
                        <button onClick={() => this.edid(item)} className='active:transform active:scale-95 active:bg-transparent active:text-black text-white mx-1 border-2 border-b-gray-600 bg-green-600 px-3 py-1 rounded-md border-none '>edit</button>
                        <button onClick={() => this.delete(item)} className='active:transform active:scale-95 active:bg-transparent active:text-black text-white mx-1 border-2 border-b-gray-600 bg-red-900 px-3 py-1 rounded-md border-none '>delete</button>
                      </div>
                    </li>
                  </ul>
                </div>
              ))
            }
            <div className='bg-[#fcfaf5]'>
              <button onClick={() => this.setState({ openModal: true })} className='active:transform active:scale-95 active:bg-transparent active:text-black text-white mx-1 my-5 border-2 border-b-gray-600 bg-green-900 px-3 py-1 rounded-md border-none'>add user</button>
            </div>
          </div>
          <div className='w-[100%]   text-center border-[1.9px]  '>
            <h1 className='text-3xl text-black font-bold py-2 bg-[#fcfaf5]'>pending</h1>
            {
              data.filter((item) => item.title === 'pending').map((item) => (
                <div>
                  <ul className='items-center  px-5 bg-[#868181] '>
                    <li className='flex items-center gap-24 pl-12'>
                      <p className='text-xl font-bold my-5'>{item.text}</p>
                      <div className='flex'>
                        <button onClick={() => this.edid(item)} className='active:transform active:scale-95 active:bg-transparent active:text-black text-white mx-1 border-2 border-b-gray-600 bg-green-600 px-3 py-1 rounded-md border-none '>edit</button>
                        <button onClick={() => this.delete(item)} className='active:transform active:scale-95 active:bg-transparent active:text-black text-white mx-1 border-2 border-b-gray-600 bg-red-900 px-3 py-1 rounded-md border-none '>delete</button>
                      </div>
                    </li>
                  </ul>
                </div>
              ))
            }
            <div className='bg-[#fcfaf5]'>
              <button onClick={() => this.setState({ openModal: true })} className='active:transform active:scale-95 active:bg-transparent active:text-black text-white mx-1 my-5 border-2 border-b-gray-600 bg-green-900 px-3 py-1 rounded-md border-none'>add user</button>
            </div>
          </div>
          <div className='w-[100%]   text-center  border-[1.9px]  '>
            <h1 className='text-3xl text-black font-bold py-2 bg-[#fcfaf5]'>progress</h1>
            {
              data.filter((item) => item.title === 'progress').map((item) => (
                <div>
                  <ul className='items-center  px-5 bg-[#868181] '>
                    <li className='flex items-center gap-24 pl-12'>
                      <p className='text-xl font-bold my-5'>{item.text}</p>
                      <div className='flex'>
                        <button onClick={() => this.edid(item)} className='active:transform active:scale-95 active:bg-transparent active:text-black text-white mx-1 border-2 border-b-gray-600 bg-green-600 px-3 py-1 rounded-md border-none '>edit</button>
                        <button onClick={() => this.delete(item)} className='active:transform active:scale-95 active:bg-transparent active:text-black text-white mx-1 border-2 border-b-gray-600 bg-red-900 px-3 py-1 rounded-md border-none '>delete</button>
                      </div>
                    </li>
                  </ul>
                </div>
              ))
            }
            <div className='bg-[#fcfaf5]'>
              <button onClick={() => this.setState({ openModal: true })} className='active:transform active:scale-95 active:bg-transparent active:text-black text-white mx-1 my-5 border-2 border-b-gray-600 bg-green-900 px-3 py-1 rounded-md border-none'>add user</button>
            </div>
          </div>
        </div>
      </div >
    )
  }
}
export default App;
