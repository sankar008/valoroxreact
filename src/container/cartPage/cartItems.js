import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useCart } from "react-use-cart";
import NumberFormat from "react-number-format";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable() {
  const { items, updateItemQuantity } = useCart();
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Details</TableCell>
            <TableCell align="left">Product Name</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => {
            const { url, quantity, itemTotal, price, name } = item;
            // const total = Number(qty * price).toFixed(2);
            return (
              <TableRow key={index}>
                <TableCell
                  component="th"
                  scope="row"
                  className=" w-1/4 my-auto"
                >
                  <img src={url} alt="product1" className="w-36" />
                </TableCell>
                <TableCell align="left">{name}</TableCell>
                <TableCell align="right">
                  <div>
                    <ButtonGroup
                      size="small"
                      aria-label="small outline-none button group"
                    >
                      {/* {displayCounter && ( */}
                      <Button
                        className="focus:outline-none"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </Button>
                      <Button disabled>{quantity}</Button>

                      <Button
                        className="focus:outline-none"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </Button>
                    </ButtonGroup>
                  </div>
                </TableCell>
                <TableCell align="right">
                  <NumberFormat
                    value={price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </TableCell>
                <TableCell align="right">
                  <NumberFormat
                    value={Number(itemTotal).toFixed(2)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  {/* $ {Number(itemTotal).toFixed(2)} */}
                </TableCell>
              </TableRow>
            );
          })}
          {/* <TableRow>
            <TableCell component="th" scope="row" className=" w-1/3 my-auto">
              <img src={Product1} alt="product1" className="w-36" />
            </TableCell>
            <TableCell align="right">2</TableCell>
            <TableCell align="right">$ 802.68</TableCell>
            <TableCell align="right">$ 1605.36</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              <img src={Product2} alt="product1" className="w-36" />
            </TableCell>
            <TableCell align="right">1</TableCell>
            <TableCell align="right">$ 602.68</TableCell>
            <TableCell align="right">$ 602.68</TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
