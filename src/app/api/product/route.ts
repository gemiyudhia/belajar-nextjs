import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "sepatu baru",
    price: 100000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/AIR+FORCE+1+%2707.png",
  },
  {
    id: 2,
    title: "sepatu lama",
    price: 200000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3157d472-63ce-457d-9723-b087da2666f5/AIR+JORDAN+1+RETRO+LOW+OG.png",
  },
  {
    id: 3,
    title: "sepatu bekas",
    price: 300000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3bdf52f5-1615-4bdf-9936-355332055c21/JORDAN+TATUM+2+PF.png",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }

  return NextResponse.json({ status: 200, message: "Success", data });
}
