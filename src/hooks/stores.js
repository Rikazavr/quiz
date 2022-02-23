import { useContext } from 'react';
import { StoresContext } from '../providers/Stores/context';

export const useStores = () => useContext(StoresContext);
