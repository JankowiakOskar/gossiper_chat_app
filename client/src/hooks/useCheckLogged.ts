import { useEffect, useState } from 'react';
import { useAppDispatch } from 'store';
import { checkOutLoggedIn } from 'features/auth/authSlice';
import { sleeper } from 'utils';

const useCheckLogged = () => {
  const [isChecking, setChecking] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const checkUserPermission = async () => {
      await sleeper(1000);
      await dispatch(checkOutLoggedIn());
      setChecking(false);
    };

    checkUserPermission();
  }, [dispatch]);

  return isChecking;
};

export default useCheckLogged;
