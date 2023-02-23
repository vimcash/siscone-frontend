import { NextPage } from "next"
import React, { useState } from "react"
import { useForm, FieldValues } from 'react-hook-form'
import { Form } from '../components/common/Form/index'


const CreateProducts = () => {
  const [productImage, setPropertyImage] = useState({ name: '', url: '' });

//   const handleImageChange = (file: File) => {
//     const reader = (readFile: File) => new Promise<string>((resolve, reject) => {
//       const fileReader = new FileReader();
//       fileReader.onload = () => resolve(fileReader.result as string);
//       fileReader.readAsDataURL(readFile);
//     });

//     reader(file).then((result: string) => setPropertyImage({ name: file?.name, url: result }));
//   };

//   const onFinishHandler = async (data: FieldValues) => {
//     if(!productImage.name) return alert('Porfavor selecciona una imagen');

//     await onFinish({ ...data, photo: productImage.url, email:user.email })
//   };

  return (
    <Form
      type="Create"
      register={{}}
      onFinish={{}}
      formLoading={{}}
      handleSubmit={{}}
      handleImageChange={{}}
      onFinishHandler={{}}
      productImage={productImage}
    />
  )
}

export default CreateProducts