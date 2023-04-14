import React, { useState } from "react";

export default function Produk({ produk }) {
  const klik = async (e) => {
    e.preventDefault();
    const nama = e.target[0].value;
    const harga = e.target[1].value;

    const response = await fetch("http://localhost:3000/api/card", {
      method: "POST",
      body: JSON.stringify({ nama, harga }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="row mt-1">
      {produk.map((list) => {
        return (
          <div className="col-sm-4 mt-3" key={list.id}>
            <div className="card">
              <img
                className="card-img-top"
                src={`img/${list.gambar}`}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title" id="nama">
                  {list.nama}
                </h5>
                <p className="card-text" id="harga">
                  Rp. {list.harga}
                </p>
                <form method="post" onSubmit={klik}>
                  <input type="hidden" name="nama" value={list.nama} />
                  <input type="hidden" name="harga" value={list.harga} />

                  <button className="btn btn-primary btn-block with-100">
                    Add Card
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
