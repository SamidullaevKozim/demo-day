import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import instance from "./../utils/axios";
import { useCartStore } from "../store/cartStore";
import { useTranslation } from "react-i18next";

const Loader = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="w-16 h-16 border-4 border-blue-300 border-t-blue-600 rounded-full animate-spin"></div>
  </div>
);

const Fruits = () => {
  const { addToCart } = useCartStore();
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useTranslation();

  const { data, isLoading, error } = useQuery({
    queryKey: ["getNewApi"],
    queryFn: async () => (await instance.get("/newApi")).data,
  });

  const fruits = data
    ?.filter((item) => item.category === "fruits")
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  if (isLoading) return <Loader />;
  if (error) return <h1>{error.message}</h1>;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto mb-6">
        <input
          type="text"
          placeholder={t("search")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {fruits?.map((fruit) => (
          <Card
            key={fruit.id}
            className="w-full bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
          >
            <CardHeader
              shadow={false}
              floated={false}
              className="h-56 rounded-t-xl overflow-hidden bg-gray-200"
            >
              <img
                src={fruit.img}
                alt={fruit.title}
                className="h-full w-full object-cover"
              />
            </CardHeader>

            <CardBody className="p-5">
              <div className="mb-3 flex items-center justify-between">
                <Typography
                  color="blue-gray"
                  className="font-semibold text-base text-gray-700"
                >
                  {fruit.title}
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium text-sm text-gray-600"
                >
                  {fruit.price} сум/кг
                </Typography>
              </div>

              <Typography
                variant="small"
                color="gray"
                className="font-normal text-sm text-gray-500 leading-relaxed"
              >
                {fruit.desc}
              </Typography>
            </CardBody>

            <CardFooter className="px-5 pb-5 pt-0 flex justify-end">
              <Button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => addToCart(fruit)}
              >
                {t("buy")}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Fruits;
