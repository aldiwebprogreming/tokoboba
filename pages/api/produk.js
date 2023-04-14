// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      nama: "Brown sugar milk tea",
      harga: 10000,
      gambar: "boba1.jpg",
    },
    {
      id: 2,
      nama: "Popping boba",
      harga: 10000,
      gambar: "boba2.jpg",
    },

    {
      id: 3,
      nama: "Matcha latte",
      harga: 15000,
      gambar: "boba3.jpg",
    },

    {
      id: 4,
      nama: "Taro milk tea",
      harga: 15000,
      gambar: "boba4.jpg",
    },
  ]);
}
