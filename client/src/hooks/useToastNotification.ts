import { useEffect, useMemo } from 'react';
import { useAppSelector, useAppDispatch } from 'store';
import { deleteError } from 'features/error/errorSlice';
import { setIdleAuthProcess } from 'features/auth/authSlice';
import { ProcessStatus } from 'utils/types/enums';
import { toast, ToastOptions } from 'react-toastify';

enum ToastEnum {
  Error = 'error',
  Success = 'success',
}

type ToastType = {
  type: ToastEnum;
  message: string;
};

const useToastNotification = () => {
  const { code, errorMessage } = useAppSelector(state => state.error);
  const { authProcess, authToken } = useAppSelector(state => state.auth);
  const isAuthorizedUser = authProcess === ProcessStatus.Success && authToken;
  const dispatch = useAppDispatch();

  const memoizedToastConfig: ToastOptions = useMemo(
    () => ({
      position: 'bottom-right',
      autoClose: 3000,
    }),
    [],
  );

  const showToast = ({ message, type }: ToastType, config: ToastOptions) => toast[type](message, config);

  useEffect(() => {
    if (code || errorMessage) {
      const message = `❗ ${code && `${code}: `}${errorMessage}`;
      showToast({ message, type: ToastEnum.Error }, { ...memoizedToastConfig, onClose: () => dispatch(deleteError()) });
    }
  }, [code, errorMessage, memoizedToastConfig, dispatch]);

  useEffect(() => {
    if (isAuthorizedUser) {
      const successfullyAuthMsg = '🤝 You are successfully logged in';
      showToast(
        { message: successfullyAuthMsg, type: ToastEnum.Success },
        { ...memoizedToastConfig, onClose: () => dispatch(setIdleAuthProcess()) },
      );
    }
  }, [isAuthorizedUser, memoizedToastConfig, dispatch]);
};

export default useToastNotification;
