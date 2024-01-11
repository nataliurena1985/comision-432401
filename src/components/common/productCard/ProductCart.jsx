import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Col } from "react-bootstrap";

import { Link } from "react-router-dom";
function ProductCart({ elemento }) {
  return (
    <Col>
      <Card sx={{ width: 450 }}>
        <CardMedia
          sx={{ height: 300 }}
          image={elemento.img}
          // title={elemento.title}
          title="hola"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign={"center"}
          >
            {elemento.title}
          </Typography>

          <Typography variant="subtitle1" textAlign={"center"}>
            ${elemento.price}.-
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {elemento.description}
          </Typography>
        </CardContent>
        <CardActions style={{ display: "flex", justifyContent: "center" }}>
          <Link to={`/itemDetail/${elemento.id}`}>
            <Button
              variant="contained"
              size="small"
              sx={{ textTransform: "none" }}
            >
              Ver detalle
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Col>
  );
}

export default ProductCart;
