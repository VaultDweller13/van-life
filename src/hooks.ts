import { useOutletContext } from 'react-router-dom';
import { VanData } from './types';

export const useVanData = () => {
  return useOutletContext<VanData>();
};
