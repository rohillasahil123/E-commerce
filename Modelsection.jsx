import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Button, Checkbox, Label, Modal, TextInput} from "flowbite-react";

const Modelsection = () => {

  const [openModal, setOpenModal] = useState(false);
  const [orderdetails, setOrderdetails] = useState({
    fullName: "",
    mobile: "",
    address: "",
    pinCode: ""
  });

  const handelChange = (e) => {
    setOrderdetails({ ...orderdetails,[e.target.name]: e.target.value })
  }

  const handelOrder = (e)=>{
    e.preventDefault();
    if(!orderdetails.fullName || !orderdetails.mobile || !orderdetails.address || !orderdetails.pinCode){
    return alert('All fields are Require')
  } else{
    alert("order success")
  }
}

  function onCloseModal() {
    setOpenModal(false);
    setOrderdetails('');
  }
  return (
    <div>
      <>
        <Button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-1 text-sm text-white text-[200px] uppercase w-[150px]" onClick={() => setOpenModal(true)}>CHECKOUT</Button>
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="fullName" value="Your Full Name" />
                </div>
                <TextInput id="fullName" type="text" value={orderdetails.fullName} name='fullName'
                  onChange={handelChange}
                  required />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="mobile" value="Your mobile" />
                </div>
                <TextInput id="mobile" type="text" value={orderdetails.mobile} name='mobile'
                  onChange={handelChange}
                  required />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="address" value="Your address" />
                </div>
                <TextInput id="address" type="text" value={orderdetails.address} name='address'
                  onChange={handelChange}
                  required />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="pinCode" value="Your pinCode" />
                </div>
                <TextInput id="pinCode" type="text" value={orderdetails.pinCode} name='pinCode'
                  onChange={handelChange}
                  required />
              </div>





              <div className="w-full">
                <Button className='w-full'
                  onClick={handelOrder}
                >Order Now</Button>
              </div>

            </div>
          </Modal.Body>
        </Modal>
      </>

    </div>
  )
}

export default Modelsection