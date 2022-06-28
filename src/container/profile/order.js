import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import * as API from "./../../api/api";
import * as c from "./../../const";
import NoOrders from "./../../assets/images/noorders.png";
import NumberFormat from "react-number-format";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable() {
  const classes = useStyles();
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [order, setOrder] = useState([]);
  useEffect(() => {
    async function orderDetails() {
      try {
        const response = await API.place_order(userData.id);
        setOrder(response.data);
      } catch (e) {
        // console.log(e);
      }
    }
    orderDetails();
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  }, []);

  // const orderArray = [];

  // function orderMap() {
  //   order.map((item) => {
  //     const orderId = item.order_id;
  //     const productArr = JSON.parse(item.product_id);
  //     productArr.map((prod) => {
  //       const data = {
  //         orderId: orderId,
  //         productName: prod.product_name,
  //         productImg: prod.product_image,
  //         productPrice: prod.price,
  //         created_at: item.created_at,
  //       };
  //       orderArray.push(data);
  //     });
  //   });
  // }

  // orderMap();

  return (
    <div className="w-full">
      <div className="px-8 py-4 bg-white text-red-800 text-xl text-semibold rounded-lg w-full shadow-md">
        Orders
      </div>
      {order.length > 0 ? (
        <TableContainer component={Paper} className="my-5">
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Order ID</TableCell>
                <TableCell align="left">Product</TableCell>
                <TableCell align="center">Product Name</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="center">Date of Purchase</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {orderArray.map((item, index) => {
                const date = new Date(item.created_at);
                const day = date.getUTCDate();
                const month = date.getUTCMonth() + 1;
                const year = date.getUTCFullYear();
                const src = c.URL + "/uploads/products/" + item.productImg;
                return (
                  <TableRow key={index}>
                    <TableCell align="left">{item.orderId}</TableCell>
                    <TableCell
                      align="left"
                      component="th"
                      scope="row"
                      className="w-1/5"
                    >
                      <img src={src} alt="order" className="w-36 h-36" />
                    </TableCell>
                    <TableCell align="center">{item.productName}</TableCell>
                    <TableCell align="right">
                      $ {Number(item.productPrice).toFixed(2)}
                    </TableCell>
                    <TableCell align="center">
                      <div className="relative">
                        <div className="absolute top-0 left-5 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
                        {day}/{month}/{year}
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })} */}

              {order.map((item, index) => {
                const date = new Date(item.created_at);
                const day = date.getUTCDate();
                const month = date.getUTCMonth() + 1;
                const year = date.getUTCFullYear();
                const product = JSON.parse(item.product_id)[0];
                const src =
                  c.URL + "/uploads/products/" + product.product_image;
                return (
                  <TableRow key={index}>
                    <TableCell align="left">{item.order_id}</TableCell>
                    <TableCell
                      align="left"
                      component="th"
                      scope="row"
                      className="w-1/5"
                    >
                      <img src={src} alt="order" className="w-36 h-36" />
                    </TableCell>
                    <TableCell align="center">{product.product_name}</TableCell>
                    <TableCell align="right" className="w-24">
                      <NumberFormat
                        value={Number(product.price).toFixed(2)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                      />
                      {/* $ */}
                    </TableCell>
                    <TableCell align="center">
                      <div className="relative">
                        <div className="absolute lg:top-0 left-3 lg:left-5 lg:h-3 lg:w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
                        {day}/{month}/{year}
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <img src={NoOrders} alt="noOrder" className="my-5 shadow-md" />
      )}
    </div>
  );
}
