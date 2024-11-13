import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Link to="/">Home</Link>
      <Button onClick={handleOpen}>Abrir modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Lorem Ipsum "Neque porro quisquam est qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit..." "No hay nadie que ame el
            dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente
            porque es el dolor." ¿Qué es Lorem Ipsum? Lorem Ipsum es simplemente
            el texto de relleno de las imprentas y archivos de texto. Lorem
            Ipsum ha sido el texto de relleno estándar de las industrias desde
            el año 1500, cuando un impresor (N. del T. persona que se dedica a
            la imprenta) desconocido usó una galería de textos y los mezcló de
            tal manera que logró hacer un libro de textos especimen. No sólo
            sobrevivió 500 años, sino que tambien ingresó como texto de relleno
            en documentos electrónicos, quedando esencialmente igual al
            original. Fue popularizado en los 60s con la creación de las hojas
            "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
            recientemente con software de autoedición, como por ejemplo Aldus
            PageMaker, el cual incluye versiones de Lorem Ipsum.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
