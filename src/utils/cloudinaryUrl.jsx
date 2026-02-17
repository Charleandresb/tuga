export default function cloudinaryUrl(publicId, width) {
  return `https://res.cloudinary.com/dunx4nzpn/image/upload/f_auto,q_auto,w_${width}/${publicId}`;
}
