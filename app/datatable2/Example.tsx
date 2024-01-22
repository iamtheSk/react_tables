"use client"
import { useMemo, useState } from "react";
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
  MRT_TableOptions,
} from "mantine-react-table";
import { citiesList, data, usStateList, type Person } from "./makeData";
import EditableCell from "../datatable/EditableCell";

const Example = () => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        cell: EditableCell,
      },
      {
        accessorKey: "amount",
        header: "Amount",
        cell: EditableCell,
      },
      {
        accessorKey: "status",
        header: "status",
        cell: EditableCell,
      },
      {
        accessorKey: "email",
        header: "Email",
        cell: EditableCell,
      },
      {
        accessorKey: "company",
        header: "Company",
        cell: EditableCell,
      },
      {
        accessorKey: "panalname",
        header: "Name of the panel",
        cell: EditableCell,
      },
      {
        accessorKey: "phone",
        header: "Phone",
        cell: EditableCell,
      },

      {
        accessorFn: (originalRow) => (originalRow.isActive ? "true" : "false"), //must be strings
        id: "isActive",
        header: "Account Status",
        filterVariant: "checkbox",
        Cell: ({ cell }) =>
          cell.getValue() === "true" ? "Active" : "Inactive",
        size: 220,
      },
      {
        accessorKey: "name",
        header: "Name",
        filterVariant: "text", // default
      },
      {
        accessorKey: "age",
        header: "Age",
        filterVariant: "range",
        filterFn: "between",
        size: 80,
      },
      {
        accessorKey: "salary",
        header: "Salary",
        Cell: ({ cell }) =>
          cell.getValue<number>().toLocaleString("en-US", {
            style: "currency",
            currency: "INR",
          }),
        filterVariant: "range-slider",
        filterFn: "betweenInclusive", // default (or between)
        mantineFilterRangeSliderProps: {
          max: 200_000, //custom max (as opposed to faceted max)
          min: 30_000, //custom min (as opposed to faceted min)
          step: 10_000,
          label: (value) =>
            value.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            }),
        },
      },
      {
        accessorKey: "city",
        header: "City",
        filterVariant: "select",
        mantineFilterSelectProps: {
          data: citiesList as any,
        },
      },
      {
        accessorKey: "state",
        header: "State",
        filterVariant: "multi-select",
        mantineFilterMultiSelectProps: {
          data: usStateList as any,
        },
      },
    ],
    []
  );

    const [tableData, setTableData] = useState<Person[]>(() => data);

    const handleSaveRow: MRT_TableOptions<Person>["onEditingRowSave"] = async ({
      table,
      row,
      values,
    }) => {
      //if using flat data and simple accessorKeys/ids, you can just do a simple assignment here.
      tableData[row.index] = values;
      //send/receive api updates here
      setTableData([...tableData]);
      table.setEditingRow(null); //exit editing mode
    };

  const table = useMantineReactTable({
    columns,
    data,
    initialState: { showColumnFilters: true },
    enableEditing: true,
  });


  return (
    <MantineReactTable
      columns={columns}
      data={tableData}
      editDisplayMode="row"
      enableEditing
      onEditingRowSave={handleSaveRow}
      // state={{ isLoading: true }}
    />
  );
};

export default Example;
