import React, { useEffect, useState } from "react";
import * as API from "./../../api/api";
import { Link } from "react-router-dom";
import { ReactComponent as Drug } from "./../../assets/icons/drugs.svg";
import { ReactComponent as Heart } from "./../../assets/icons/heart.svg";
import { ReactComponent as Cross } from "./../../assets/icons/cross.svg";
import { ReactComponent as MedicalReport } from "./../../assets/icons/medical-report.svg";

export default function Product() {
  const [countMedicine, setCountMedicine] = useState(0);
  const [countDiagnostic, setCountDiagnostic] = useState(0);
  const [countWellness, setCountWellness] = useState(0);
  const [countHealth, setCountHealth] = useState(0);

  useEffect(() => {
    async function ProductListApi() {
      try {
        const response = await API.product_section();
        setCountMedicine(response.data["1"]);
        setCountDiagnostic(response.data["2"]);
        setCountWellness(response.data["3"]);
        setCountHealth(response.data["4"]);
      } catch (error) {}
    }
    ProductListApi();
  }, []);

  return (
    <div className="w-full bg-white h-auto lg:p-5 lg:mb-4 rounded-lg shadow-md">
      <ul>
        <Link
          to={{
            pathname: "/category/medicine",
            state: {
              slug: 1,
            },
          }}
        >
          <li className="my-4 cursor-pointer">
            <div className="flex justify-start">
              <div className="w-10 h-10 bg-blue-500 rounded-full relative my-auto shadow-md">
                <Drug
                  width="25px"
                  height="25px"
                  fill="white"
                  className="absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
              <div>
                <div className="my-auto mx-2 text-lg relative">
                  <div className="text-lg">Medicine</div>
                  <div className="text-sm text-gray-400">
                    Over {countMedicine} products
                  </div>
                </div>
              </div>
            </div>
          </li>
        </Link>
        <Link
          to={{
            pathname: "/category/diagnostic",
            state: {
              slug: 2,
            },
          }}
        >
          <li className="my-4 cursor-pointer">
            <div className="flex justify-start">
              <div className="w-10 h-10 bg-pink-500 rounded-full relative my-auto shadow-md">
                <MedicalReport
                  width="25px"
                  height="25px"
                  fill="white"
                  className="absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
              <div>
                <div className="my-auto mx-2 text-lg relative">
                  <div className="text-lg">Diagnostic</div>
                  <div className="text-sm text-gray-400">
                    Over {countDiagnostic} products
                  </div>
                </div>
              </div>
            </div>
          </li>
        </Link>
        <Link
          to={{
            pathname: "/category/wellness",
            state: {
              slug: 3,
            },
          }}
        >
          <li className="my-4 cursor-pointer">
            <div className="flex justify-start">
              <div className="w-10 h-10 bg-green-500 rounded-full relative my-auto shadow-md">
                <Cross
                  width="25px"
                  height="25px"
                  fill="white"
                  className="absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
              <div>
                <div className="my-auto mx-2 text-lg relative">
                  <div className="text-lg">Wellness</div>
                  <div className="text-sm text-gray-400">
                    Over {countWellness} products
                  </div>
                </div>
              </div>
            </div>
          </li>
        </Link>
        <Link
          to={{
            pathname: "/category/health-cornor",
            state: {
              slug: 4,
            },
          }}
        >
          <li className="my-4 cursor-pointer">
            <div className="flex justify-start">
              <div className="w-10 h-10 bg-yellow-500 rounded-full relative my-auto shadow-md">
                <Heart
                  width="25px"
                  height="25px"
                  fill="white"
                  className="absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
              <div>
                <div className="my-auto ml-2 text-lg relative">
                  <div className="text-lg">Health Corner</div>
                  <div className="text-sm text-gray-400">
                    Over {countHealth} products
                  </div>
                </div>
              </div>
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
}
