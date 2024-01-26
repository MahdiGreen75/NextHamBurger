'use client';
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from 'next/image';

const ImagePicker = ({ label, name }) => {
    const [pickedImage, setPickedImage] = useState();
    const imageInputRef = useRef(null);

    const handlePickClick = () => {
        imageInputRef.current.click();
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        // এটাকে এখনই ব্রাউজারে দেখাতে হলে ফাইলে থেকে data URL এল এ কনভার্ট করতে হবে।
        // which is src for an image.

        const fileReader = new FileReader();

        // the following "fileReader.readAsDataURL(file);" 
        // funciton doesn't return anything 
        // or do anyting with a callback. instead we can hold
        // the data url by assigning a value to the "onload"
        // property of this filereader object.
        fileReader.onload = () => {
            // console.log(fileReader.result);
            setPickedImage(fileReader.result);
        }

        fileReader.readAsDataURL(file);

    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet.</p>}
                    {pickedImage && 
                    <Image
                        src={pickedImage}
                        alt="The image selected by user."
                        fill // As i don't know the dimension of the image.
                    ></Image>}
                </div>
                <input
                    className={classes.input}
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    ref={imageInputRef}
                    onChange={handleImageChange}
                />
                <button className={classes.button} type="button" onClick={handlePickClick}>
                    Pick an Image
                </button>
            </div>
        </div>
    );
};

export default ImagePicker;