type ProductPageProps = {
  params: {
    slug: string[];
  };
};

const getData = async () => {
  // const res = await fetch("https://fakestoreapi.com/products");
  const res = await fetch("http://localhost:3000/api/product", {
    cache: "force-cache",
    next: {
      tags: ['products'],
      
      //  revalidate: 30
      },
  });

  if (!res.ok) {
    throw new Error("Failed fetch data");
  }

  return res.json();
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const products = await getData();

  console.log(products);
  return (
    <div className="grid grid-cols-4 place-items-center mt-5">
      {/* <h1>{params.slug ? " Product Page" : "Product Page"}</h1> */}
      {products.data.length > 0 &&
        products.data.map((product: any) => (
          <div
            key={product.key}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5"
          >
            <a href="#">
              <img
                className="p-8 rounded-t-lg object-cover h-96 w-full"
                src={product.image}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                  {product.title}
                </h5>
              </a>

              <div className="flex items-center justify-between mt-3">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  $ {product.price}
                </span>
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        ))}
      {params.slug && (
        <>
          <h2>Category : {params.slug[0]}</h2>
          <h2>Gender : {params.slug[1]}</h2>
          <h2>iD : {params.slug[2]}</h2>
        </>
      )}
    </div>
  );
};

export default ProductPage;
