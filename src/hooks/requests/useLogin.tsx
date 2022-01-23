import { useMutation } from 'react-query';
import { AxiosResponse, AxiosError } from 'axios';
import { request, authService } from '@api';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@contexts/Toast';

type KeyValue<V> = { [key: string]: V };

export const useLogin = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  return useMutation<AxiosResponse, AxiosError, KeyValue<string>>(
    (data) => {
      return request('login', { data });
    },
    {
      onSuccess: (data) => {
        authService.setUser(data.data);
        navigate('/wallet');
      },
      onError: (error) => {
        showToast(error.response.data.message);
      },
    },
  );
};
