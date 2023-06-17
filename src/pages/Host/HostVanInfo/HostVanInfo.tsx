import { useParams } from 'react-router-dom';

export const HostVanInfo = () => {
  const { id } = useParams();

  return (
    <main>
      <h1>Van #{id} info</h1>
    </main>
  );
};
