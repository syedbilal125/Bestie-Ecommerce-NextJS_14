'use client'
import { authModleState } from '../../Atoms/AuthAtom/auth';
import React from 'react';
import { useRecoilValue } from 'recoil';
import Register from '../Auth/Register'
import Login from '../Auth/Login'

type AuthModelProps = {

};

const AuthModel: React.FC<AuthModelProps> = () => {
    const authModle = useRecoilValue(authModleState)
    return (
        <>
            <div className='flex justify-center items-center w-full '>
                {authModle.type === 'login' ? <Login /> : authModle.type === 'register' && <Register />}
            </div>
        </>
    )
}
export default AuthModel;