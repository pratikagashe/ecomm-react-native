import React, {createContext, useState} from 'react';
import {IUserProfile} from 'utils/interface';

interface IProviderProps {
  children: any;
}

const userProfile = {
  email: '',
  firstName: '',
  isEmailVerified: false,
  lastName: '',
  profileImage: null,
  role: '',
  userId: 0,
  cart: [],
  wishlist: [],
};

export const Context = createContext<
  [IUserProfile, (profile: IUserProfile) => void]
>([userProfile, () => {}]);

export const Provider = (props: IProviderProps): any => {
  const {children} = props;
  const currentUserProfile = useState<IUserProfile>(userProfile);

  return (
    <Context.Provider value={currentUserProfile}>{children}</Context.Provider>
  );
};
