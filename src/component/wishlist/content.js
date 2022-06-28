import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useCart } from "react-use-cart";
import * as API from "./../../api/api";
import * as c from "./../../const";
import { Link } from "react-router-dom";
import EmptyWishlist from "./../../assets/images/empty-wishlist.png";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable() {
  const { addItem } = useCart();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("userData"));

  const [wishItem, setWishItem] = useState([]);

  useEffect(() => {
    async function getWishlist() {
      try {
        const response = await API.get_wishlist(user.id);
        setWishItem(response.data);
      } catch (e) {}
    }
    window["scrollTo"]({ top: 0, behavior: "smooth" });
    getWishlist();
  }, []);

  return (
    <>
      {wishItem.length > 0 ? (
        <TableContainer component={Paper} className="mt-3">
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell align="left">Product Image</TableCell>
                <TableCell align="right">Product Price</TableCell>
                <TableCell align="center">Add to cart</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {wishItem.map((item, index) => {
                const product = JSON.parse(item.product_item);
                const url = c.URL;
                const src = url + "/uploads/products/" + product.product_image;
                const data = {
                  id: item.id,
                  name: product.product_name,
                  price: product.price,
                  url: src,
                };
                return (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {product.product_name}
                    </TableCell>
                    <TableCell align="left">
                      <img
                        src={src}
                        alt={product.product_name}
                        className="h-24 w-24"
                      />
                    </TableCell>
                    <TableCell align="right">$ {product.price}</TableCell>
                    <TableCell align="center">
                      <div>
                        <button
                          className="my-auto text-base mx-auto text-white font-semibold bg-red-800 p-2 w-1/2"
                          key={data.id}
                          onClick={() => {
                            addItem(data);
                          }}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
              {/* {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))} */}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Paper className="align-center mx-auto mt-4 py-5">
          <div>
            <img
              src={EmptyWishlist}
              alt="empty"
              className="object-center mx-auto mt-5"
            />
          </div>
          <div className="flex justify-center mt-5">
            <Link to="/">
              <button className="py-3 bg-red-800 text-white rounded hover:bg-white border-2 border-red-800 hover:bg-red-900 focus:outline-none px-4 ">
                Continue Shopping
              </button>
            </Link>
          </div>
        </Paper>
      )}
    </>
  );
}
