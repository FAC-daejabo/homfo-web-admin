import styled from "styled-components";

export const TableContainer = styled.div`
  margin-bottom: 40px;
`;

export const TableTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Row = styled.tr``;

export const Heading = styled.th`
  width: 20%;
  height: 50px;
  text-align: center;
  border: 1px solid #000;

  vertical-align: top; /* 위 */
  vertical-align: bottom; /* 아래 */
  vertical-align: middle; /* 가운데 */
`;

export const Data = styled.td`
  width: 20%;
  height: 50px;
  text-align: center;
  border: 1px solid #000;

  vertical-align: top; /* 위 */
  vertical-align: bottom; /* 아래 */
  vertical-align: middle; /* 가운데 */
`;

export const ApproveButton = styled(Data)`
  width: 10%;
  color: #ffffff;
  background-color: #624bff;
  cursor: pointer;
`;

export const RejectButton = styled(Data)`
  width: 10%;
  color: #ffffff;
  background-color: #dc3545;
  cursor: pointer;
`;

export const DeleteButton = styled(Data)`
  width: 10%;
  color: #ffffff;
  background-color: #dc3545;
`;
