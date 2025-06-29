import ImageUpload from '@/components/Admin/ImageUpload';
import { Button } from '@/components/ui/button';
import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";

const ADdashbord = () => {

const [image, setImage] = useState(null);
const [imageUrl, setImageUrl] = useState("");
const [loading, setLoading] = useState(false);
const dispatch = useDispatch();

const handleuploadImagetoCloud = () => {
  
}

  return (
    <div>
      <ImageUpload
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            image={image}
            setImage={setImage}
            setLoading={setLoading}
            loading={loading}
            isCustomStyle= {true}
          />

          <Button className={"mt-4 w-full"} onClick={ handleuploadImagetoCloud} >Upload</Button>
    </div>
  )
}

export default ADdashbord
