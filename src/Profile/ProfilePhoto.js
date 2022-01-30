import React from 'react';
import MyProfilePhoto from './MyProfileImage.jpg'

export const ProfilePhoto =()=>{
    return (
        <>
        <img className="ProfileImg" src={MyProfilePhoto} alt='ProfileImg'></img>
        </>
    );
};