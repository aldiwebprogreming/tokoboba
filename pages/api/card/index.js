// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ListKeranjang } from "../../../data/ListKeranjang";
export default function handler(req, res) {
  if (req.method == "GET") {
    res.status(200).json(ListKeranjang);
  } else if (req.method == "POST") {
    const nama = req.body.nama;
    const harga = req.body.harga;
    const newKeranjang = {
      id: Date.now(),
      nama: nama,
      harga: harga,
      qty: 1,
    };
    ListKeranjang.push(newKeranjang);
    res.status(201).json(newKeranjang);
  }
}
