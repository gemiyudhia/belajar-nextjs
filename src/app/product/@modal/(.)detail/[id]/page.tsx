import Modal from "@/components/core/Modal";
import { getData } from "@/services/products";
import Image from "next/image";

type DetailProductPageProps = {
  params: {
    id: string;
  };
};

const DetailProductPage = async ({ params }: DetailProductPageProps) => {
  const product = await getData(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product/?id=${params.id}`
  );

  return (
    <Modal>
      <Image
        src={product.data.image}
        alt=""
        className="w-full object-cover aspect-square col-span-2"
        width={500}
        height={500}
      />
      <div className="bg-white p-4 px-6">
        <h2>{product.data.name}</h2>
        Price: $<p>{product.data.price}</p>
      </div>
    </Modal>
  );
};

export default DetailProductPage;
