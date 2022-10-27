import React, {useEffect, useState} from "react";
import './UserEdit.css';
import {onPreviewChange, pictureChange} from "../../functions/Functions";
import {updateUser} from "../../../services/user-service/UserService";

function UserEdit() {

    const [userData, setUserData] = useState({
        username: localStorage.getItem("Username"),
        description: localStorage.getItem("UserDescription"),
        previewPhoto: localStorage.getItem("UserProfilePhoto"),
        imgFile:'',
        image:localStorage.getItem("UserProfilePhoto")
    });

    const onChangePicture = (e) => {
        const file = e.target.files[0];
        pictureChange(file, setUserData, userData);
    }

    useEffect(() => {
        onPreviewChange(setUserData, userData, userData.imgFile);
    }, [userData.imgFile])

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            username: userData.username,
            password: localStorage.getItem("UserPassword"),
            email: localStorage.getItem("UserEmail"),
            description: userData.description,
            roleId: +localStorage.getItem("UserRoleId"),
            profilePhoto: userData.image
        }

        updateUser(data).then(() => {
            localStorage.setItem("Username", userData.username);
            localStorage.setItem("UserDescription", userData.description);
            localStorage.setItem("UserProfilePhoto", userData.image);
            window.location.replace("/user");
        });
    }


    return(
        <div className="form-block-user-edit">
            <h1>Edit profile</h1>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    value={userData.username}
                onChange={e => setUserData({...userData, username: e.target.value})}/>
                <label>Description</label>
                <textarea
                    value={userData.description}
                onChange={e => setUserData({...userData, description: e.target.value})}/>
                <label>Profile photo</label>
                <div className='image-preview'>
                    <img src={userData.previewPhoto}/>
                </div>
                <input
                    type="file"
                    name="profilpic"
                    accept="image/*"
                    onChange={onChangePicture}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UserEdit;