import { useEffect, useState } from "react";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

import { ClientRow } from "./ClientRow";
import { getClients, createClient, IClient } from "../services/clientsApi";

export const ClientTable = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [clientList, setClientList] = useState<IClient[]>([]);
  const [clientName, setClientName] = useState<string>("");
  const [clientCpf, setClientCpf] = useState<string>("");
  const [clientEmail, setClientEmail] = useState<string>("");
  const [clientPhone, setClientPhone] = useState<string>("");
  const [clientAddress, setClientAddress] = useState<string>("");

  useEffect(() => {
    try {
      setIsLoading(true);
      getClients().then((res) => {
        if (res) {
          setClientList(res.data);
        }
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  function addClient(name: string, cpf: string, email: string, phone: string, address: string) {
    try {
      createClient(name, cpf, email, phone, address).then((res) => {
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
      {isLoading ? (
        <Stack alignItems="center" m="10rem">
          <CircularProgress size={60} sx={{ color: "#fcb950" }} />
        </Stack>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Nome</TableCell>
                <TableCell align="center">CPF</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Telefone</TableCell>
                <TableCell align="center">Endereço</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => {
                      addClient(clientName, clientCpf, clientEmail, clientPhone, clientAddress);
                    }}>
                    <AddCircleIcon color="primary" />
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
                    name="cpf"
                    size="small"
                    variant="standard"
                    sx={{ width: "120px" }}
                    value={clientCpf}
                    onChange={(e) => setClientCpf(e.target.value)}
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
              {clientList.map((client) => (
                <ClientRow key={client.cpf} client={client} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};
