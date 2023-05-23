import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
  padding: 10px 0px;
  font-size: 1.2rem;
`;

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => props.color};
  font-size: 1.1rem;
`;

export const Value = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  color: #fff;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
`;
