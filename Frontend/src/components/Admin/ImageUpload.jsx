import React, { useEffect, useRef } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import axios from "axios";

const ImageUpload = ({ image, setImage, imageUrl, setImageUrl }) => {
  const inputRef = useRef(null);
  const handleImageFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };
    
  const handleREmoveImage = () => {
    setImage(null);
    if(inputRef.current){
      inputRef.current.value = null;
    }
  }

  const uploadImagetoCloud = async () => {
    const data = new FormData();
    data.append("my-image", image);
    const response = await axios.post(" http://localhost:5000/api/admin/uploadimage ", data,); 
    console.log(response);
    if(response){

      setImageUrl(response.data.result.url)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const handleDrop = (e) => {
    e.preventDefault();
    const dropfile = e.dataTransfer.files[0];
    if (dropfile) {
      setImage(dropfile);
    }
  }

   useEffect(() => {
     if(image !== null){
      uploadImagetoCloud()

     }
   }, [image])

  return (
    <div className="w-full max-w-md mx-auto mt-4 ">
      <Label className={"text-xl ml-5 mb-3 font-semibold "}>Upload Image</Label>
      <div className="flex flex-col items-center justify-center h-32 m-5 cursor-pointer border-dashed border-2 p-5 rounded-xl ">
        <Input
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          id="image-upload"
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleImageFile}
        />
        {!image ? (
          <Label
            htmlFor="image-upload"
            className={
              " flex flex-col items-center  justify-center h-36 cursor-pointer "
            }
          >
            <UploadCloudIcon className=" w-10 h-10 text-muted-foreground text-xl mb-2" />
            <span className="text-muted-foreground font-medium text-lg ">
              {" "}
              Drag & Drop Upload Image
            </span>
          </Label>
        ) : (
          <div className="flex items-center justify-between w-full  cursor-pointer">
            <div className="flex items-center">
              <FileIcon className="w-7 h-7 text-primary text-lg mr-2" />
            </div>
               <p className=" font-medium text-base">{image.name} </p>
               <Button variant={"ghost"} size={"icon"} className={"text-muted-foreground hover:text-foreground "} onClick={handleREmoveImage} >
                <XIcon className="w-4 h-4 "/>
               </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
