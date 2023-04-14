import { ListKeranjang } from "../../../data/ListKeranjang";
export default function handler(req, res) {
  const { cardId } = req.query;
  if (req.method === "GET") {
    const card = ListKeranjang.find((card) => card.id === parseInt(cardId));
    res.status(200).json(card);
  } else if (req.method === "DELETE") {
    const cardDelete = ListKeranjang.find(
      (card) => card.id === parseInt(cardId)
    );
    const index = ListKeranjang.findIndex(
      (card) => card.id == parseInt(cardId)
    );
    ListKeranjang.splice(index, 1);
    res.status(200).json(cardDelete);
  }
}
