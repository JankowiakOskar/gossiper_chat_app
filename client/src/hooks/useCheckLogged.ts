import { useEffect, useState } from 'react';
import { useAppDispatch } from 'store';
import { checkOutLoggedIn } from 'features/auth/authSlice';

const useCheckLogged = () => {
  const [isChecking, setChecking] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const checkUserPermision = async () => {
      await dispatch(checkOutLoggedIn());
      setChecking(false);
    };

    checkUserPermision();
  }, [dispatch]);

  return isChecking;
};

export default useCheckLogged;
