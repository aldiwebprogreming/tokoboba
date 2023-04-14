import react from "react";
import React, { useEffect, useState } from "react";

export default function KeranjangBelanja() {
  const [cardData, setCard] = useState([]);

  const listCard = async () => {
    const res = await fetch("http://localhost:3000/api/card");
    const data = await res.json();
    setCard(data);
  };

  const actionHapus = async (id) => {
    const idCard = parseInt(id); //id di parsing menjadi interger
    const res = await fetch(`http://localhost:3000/api/card/${idCard}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    listCard();
  }, [cardData]);

  return (
    <div>
      <div className="card">
        <div className="card-header bg-primary text-white">List Card</div>
        <ul className="list-group list-group-flush">
          {cardData.map((list) => {
            return (
              <li className="list-group-item" key={list.id}>
                {list.nama}
                {list.nama ? (
                  <a href="#" bg="danger" onClick={() => actionHapus(list.id)}>
                    Hapus
                  </a>
                ) : (
                  ""
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
