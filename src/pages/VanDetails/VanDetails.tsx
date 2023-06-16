import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { VanData } from '../../types';

export const VanDetails = () => {
  const { id } = useParams();
  const [vanData, setVanData] = useState<VanData>();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/vans/${id}`);

      if (response.ok) {
        const data = await response.json();
        setVanData(data.vans);
      }
    }

    fetchData();
  }, [id]);

  return <h1>Van details</h1>;
};
