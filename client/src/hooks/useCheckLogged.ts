import { useEffect, useState } from 'react';
import { useAppDispatch } from 'store';
import { checkOutLoggedIn } from 'features/auth/authSlice';

const useCheckLogged = () => {
  const [isChecking, setChecking] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const checkUserPermission = async () => {
      await dispatch(checkOutLoggedIn());
      setChecking(false);
    };

    checkUserPermission();
  }, [dispatch]);

  return isChecking;
};

export default useCheckLogged;
