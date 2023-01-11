import { useState } from "react";

import Box from "@mui/material/Box";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from "@mui/icons-material/Edit";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { updateClient, deleteClient } from "../services/clientsApi";

export const ClientRow = ({ client }: any) => {
  const [clientName, setClientName] = useState<string>();
  const [clientEmail, setClientEmail] = useState<string>();
  const [clientPhone, setClientPhone] = useState<string>();
  const [clientAddress, setClientAddress] = useState<string>();

  const [openModal, setOpenModal] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleOpen = () => setOpenModal(true);

  const openEditor = () => {
    setClientName(client.name);
    setClientEmail(client.email);
    setClientPhone(client.phone);
    setClientAddress(client.address);
    setOpenEdit(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setOpenEdit(false);
  };

  function editClient(
    id: string,
    name: string | undefined,
    email: string | undefined,
    phone: string | undefined,
    address: string | undefined
  ) {
    try {
      updateClient(id, name, email, phone, address).then((res) => {
        if (res) {
          return window.location.reload();
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  function removeClient(id: string) {
    try {
      deleteClient(id).then((res) => {
        if (res) {
          return window.location.reload();
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <TableRow sx={{ display: `${openEdit ? "none" : ""}` }}>
        <TableCell>
          <IconButton size="small" onClick={handleOpen}>
            <DeleteForeverIcon color="error" />
          </IconButton>
          <IconButton size="small" onClick={() => openEditor()}>
            <EditIcon color="primary" />
          </IconButton>
        </TableCell>

        <TableCell component="th" scope="row">
          {client.name}
        </TableCell>
        <TableCell align="center">{client.cpf}</TableCell>
        <TableCell align="center">{client.email}</TableCell>
        <TableCell align="center">{client.phone}</TableCell>
        <TableCell align="center">{client.address}</TableCell>
      </TableRow>

      <TableRow sx={{ display: `${!openEdit ? "none" : ""}` }}>
        <TableCell>
          <IconButton
            size="small"
            onClick={() => {
              editClient(client._id, clientName, clientEmail, clientPhone, clientAddress);
            }}>
            <CheckCircleIcon color="success" />
          </IconButton>
          <IconButton size="small" onClick={() => setOpenEdit(false)}>
            <HighlightOffIcon color="action" />
          </IconButton>
        </TableCell>
        <TableCell>
          <TextField
            name="name"
            size="small"
            variant="standard"
            sx={{ width: "120px" }}
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
        </TableCell>
        <TableCell align="center">
          <TextField
            disabled
            name="cpf"
            size="small"
            variant="standard"
            value={client.cpf}
            sx={{ width: "120px" }}
          />
        </TableCell>
        <TableCell align="center">
          <TextField
            name="email"
            size="small"
            variant="standard"
            sx={{ width: "120px" }}
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
          />
        </TableCell>
        <TableCell align="center">
          <TextField
            name="phone"
            size="small"
            variant="standard"
            sx={{ width: "120px" }}
            value={clientPhone}
            onChange={(e) => setClientPhone(e.target.value)}
          />
        </TableCell>
        <TableCell align="center">
          <TextField
            name="address"
            size="small"
            variant="standard"
            sx={{ width: "120px" }}
            value={clientAddress}
            onChange={(e) => setClientAddress(e.target.value)}
          />
        </TableCell>
      </TableRow>

      <Modal open={openModal} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "20rem",
            bgcolor: "grey.300",
            borderRadius: 4,
            boxShadow: 24,
            p: 2,
          }}>
          <Typography color="#19857b" variant="h6" component="h2" mb={2}>
            Você quer mesmo deletar o cliente {client.name}?
          </Typography>
          <Box component="div" textAlign="right">
            <IconButton size="small" onClick={handleClose}>
              <HighlightOffIcon fontSize="large" color="error" />
            </IconButton>
            <IconButton size="small" onClick={() => removeClient(client._id)}>
              <CheckCircleIcon fontSize="large" color="primary" />
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
