// image config
export const img_URL = {
  horizontal: process.env.NEXT_PUBLIC_TMDB_API_IMG_HOR,
  vertical: process.env.NEXT_PUBLIC_TMDB_API_IMG,
  responsive: process.env.NEXT_PUBLIC_TMDB_API_IMG_RESPONSIVE,
};
export const default_URL = {
  horizontal: '/horizontal_default.jpeg',
  vertical: '/vertical_default.jpeg',
};
export const imageSettings = {
  landscape: {
    width: 300,
    aspectRatio: '16/9',
  },
  portrait: {
    width: 342,
    aspectRatio: '2/3',
  },
  portrait_sm: {
    width: 185,
    aspectRatio: '2/3',
  },
  thumbnail: {
    width: 92,
  },
};
