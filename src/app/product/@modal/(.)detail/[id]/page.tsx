import Modal from "@/components/core/Modal";
import { getData } from "@/services/products";
import React from "react";

type DetailProductPageProps = {
  params: {
    id: string;
  };
};

const DetailProductPage = async ({ params }: DetailProductPageProps) => {
  const product = await getData(
    `http://localhost:3000/api/product/?id=${params.id}`
  );

  return (
    <Modal>
      <img
        src={product.data.image}
        alt=""
        className="w-full object-cover aspect-square col-span-2"
      />
      <div className="bg-white p-4 px-6">
        <h2>{product.data.name}</h2>
        Price: $<p>{product.data.price}</p>
      </div>
    </Modal>
  );
};

export default DetailProductPage;
