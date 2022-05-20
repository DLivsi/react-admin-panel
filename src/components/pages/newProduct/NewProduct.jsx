import React from 'react'
import "./NewProduct.css"
import { Publish } from '@mui/icons-material'

export default function NewProduct () {
  return (
    <div className="newProduct">
       <div className="productBottom">
         <form action="" className="productForm">
             <div className="productFormLeft">
                 <label htmlFor="">Product Name</label>
                 <input type="text" placeholder="Apple Airpods" />
                 <label htmlFor="">In Stock</label>
                 <select name="inStock" id="idStock">
                     <option value="yes">Yes</option>
                     <option value="no">No</option>
                 </select>
                 <label htmlFor="">Active</label>
                 <select name="active" id="active">
                     <option value="yes">Yes</option>
                     <option value="no">No</option>
                 </select>
             </div>
             <div className="productFormRight">
                 <div className="productUpload">
                     <img src="https://teek.ru/upload/iblock/21f/21fa13ae3b18e17af3ce892785b8c8e9.png" alt="" className="productUploadImg" />
                     <label for="file">
                         <Publish/>
                     </label>
                     
                 </div>
                 <input type="file" id="file" style={{display:"none"}}/>
                 <button className="productButton">Create</button>
             </div>
         </form>
      </div>
    </div>
  )
}

