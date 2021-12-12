import { useEffect, useState } from 'react';
import { useAppDispatch } from 'store';
import { verifyLoggedIn } from 'features/auth/authSlice';

const useCheckLoggedIn = () => {
  const [isChecking, setChecking] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const checkUserPermission = async () => {
      await dispatch(verifyLoggedIn()).unwrap();
      setChecking(false);
    };

    checkUserPermission();
  }, [dispatch]);

  return isChecking;
};

export default useCheckLoggedIn;
