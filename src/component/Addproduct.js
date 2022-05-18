import React, { useState } from 'react'
import Header from './Header'

const Addproduct = () => {
    var [name,setProduct]=useState("")
    var [Price,setPrice]=useState("")
    var [Description,setDescription]=useState("")
    var [Category,setCategory]=useState("")
const subData=()=>{
    const data={"name":name,"Price":Price,"Description":Description,"Category":Category}
    console.log(data)
}
  return (
    <div>
        <Header/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-2 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                    
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" className="form-label">Product Title</label>
                            <input onChange={(y)=>{setProduct(y.target.value)}} type="text" className="form-control"/>
                        </div>                                   
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" className="form-label">Price</label>
                            <input onChange={(y)=>{setPrice(y.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" className="form-label">Description</label>
                            <input onChange={(y)=>{setDescription(y.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" className="form-label">Category</label>
                            <input onChange={(y)=>{setCategory(y.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={subData} className="btn btn-primary">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Addproduct