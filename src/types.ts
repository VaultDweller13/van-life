export type VanData = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: 'simple' | 'rugged' | 'luxury';
};

export type FetchError = {
  message: string;
  statusText: string;
  status: string;
};
