"use client"
import { useMemo, useState } from "react";
import { MantineReactTable } from "mantine-react-table";
import { Text } from "@mantine/core";
// import { data } from "./makeData";



const Example = ({data}) => {
  const columns = useMemo(
    () => [
      {
        header: "Solar Stv",
        columns: [
          {
            accessorKey: "id",
            header: "ID",
          },
          {
            accessorKey: "company",
            header: "Company",
          },
          {
            accessorKey: "panalname",
            header: "Name of the panal",
          },
          {
            accessorKey: "phone",
            header: "Phone number",
          },
          {
            accessorKey: "firstName",
            header: "First Name",
          },
          {
            accessorKey: "lastName",
            header: "Last Name",
          },
          {
            accessorKey: "gender",
            header: "Gender",
          },
        ],
      },
      {
        header: "Mounting",
        columns: [
          {
            accessorKey: "height",
            header: "Height",
          },
          {
            accessorKey: "width",
            header: "Width",
          },
          {
            accessorKey: "size",
            header: "size of the panel",
          },
          {
            accessorKey: "address",
            header: "Address",
          },
          {
            accessorKey: "salary",
            header: "Salary",
          },
        ],
      },

      {
        header: "General",
        columns: [
          {
            accessorKey: "status",
            header: "status",
          },
          {
            accessorKey: "email",
            header: "Email",
            enableClickToCopy: true,
          },
        ],
      },
    ],
    []
  );


  
  // const columns = useMemo(
  //   () => [
  //         {
  //           accessorKey: "id",
  //           header: "ID",
  //         },
  //         {
  //           accessorKey: "company",
  //           header: "Company",
  //         },
  //         {
  //           accessorKey: "panalname",
  //           header: "Name of the panal",
  //         },
  //         {
  //           accessorKey: "phone",
  //           header: "Phone number",
  //         },
  //         {
  //           accessorKey: "firstName",
  //           header: "First Name",
  //         },
  //         {
  //           accessorKey: "lastName",
  //           header: "Last Name",
  //         },
  //         {
  //           accessorKey: "gender",
  //           header: "Gender",
  //         },
  //         {
  //           accessorKey: "height",
  //           header: "Height",
  //         },
  //         {
  //           accessorKey: "width",
  //           header: "Width",
  //         },
  //         {
  //           accessorKey: "size",
  //           header: "size of the panel",
  //         },
  //         {
  //           accessorKey: "address",
  //           header: "Address",
  //         },
  //         {
  //           accessorKey: "salary",
  //           header: "Salary",
  //         },
  //         {
  //           accessorKey: "status",
  //           header: "status",
  //         },
  //         {
  //           accessorKey: "email",
  //           header: "Email",
  //           enableClickToCopy: true,
  //         },
  //   ],
  //   []
  // );

  const [tableData, setTableData] = useState(() => data);

  const handleSaveCell = (cell, value) => {
    //if using flat data and simple accessorKeys/ids, you can just do a simple assignment here
    tableData[cell.row.index][cell.column.id] = value;
    //send/receive api updates here
    setTableData([...tableData]); //re-render with new data
  };



  return (
    <>
      <MantineReactTable
        columns={columns}
        data={tableData}
        editDisplayMode="cell"
        enableEditing
        mantineEditTextInputProps={({ cell }) => ({
          //onBlur is more efficient, but could use onChange instead
          onBlur: (event) => {
            handleSaveCell(cell, event.target.value);
          },
        })}
        //   renderBottomToolbarCustomActions={() => (
        //     <Text sx={{ fontStyle: "italic", padding: "0 16px" }}>
        //       Double-Click a Cell to Edit
        //     </Text>
        //   )}
      />
    </>
  );
};

export default Example;
