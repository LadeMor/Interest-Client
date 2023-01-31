import React from "react";
import preview from "../../icons/photo-image-picture.svg";

export const pictureChange = (file, setState, state) => {
    if(file && file.type.substr(0,5) === "image"){
        setState({...state, imgFile: file});
    }else {
        setState({...state, imgFile: null});
    }
}

export const onPreviewChange = (setDataState, dataState, imgData) => {
    if(imgData){
        const reader = new FileReader();
        reader.onloadend = () =>{
            setDataState({
                ...dataState,
                previewPhoto: reader.result,
                image: reader.result
            })
        }
        reader.readAsDataURL(dataState.imgFile);
    }else{
        setDataState({...dataState, previewPhoto: preview})
    }
}
