"use client";

import {
  ArrowDownIcon,
  ArrowUpIcon,
  CaretSortIcon,
  EyeNoneIcon,
} from "@radix-ui/react-icons";

import {
  Column,
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";


import { useState } from "react";
import { DataTablePagination } from "./DataTablePagination";
import { DataTableViewOptions } from "./ColumnToggle";

// For sorting
interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

 export function DataTableColumnHeader<TData, TValue>({
   column,
   title,
   className,
 }: DataTableColumnHeaderProps<TData, TValue>) {
   if (!column.getCanSort()) {
     return <div className={cn(className)}>{title}</div>;
   }

   return (
     <div className={cn("flex items-center space-x-2", className)}>
       <DropdownMenu>
         <DropdownMenuTrigger asChild>
           <Button
             variant="ghost"
             size="sm"
             className="-ml-3 h-8 data-[state=open]:bg-accent">
             <span>{title}</span>
             {column.getIsSorted() === "desc" ? (
               <ArrowDownIcon className="ml-2 h-4 w-4" />
             ) : column.getIsSorted() === "asc" ? (
               <ArrowUpIcon className="ml-2 h-4 w-4" />
             ) : (
               <CaretSortIcon className="ml-2 h-4 w-4" />
             )}
           </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent align="start">
           <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
             <ArrowUpIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
             Asc
           </DropdownMenuItem>
           <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
             <ArrowDownIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
             Desc
           </DropdownMenuItem>
           <DropdownMenuSeparator />
           <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
             <EyeNoneIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
             Hide
           </DropdownMenuItem>
         </DropdownMenuContent>
       </DropdownMenu>
     </div>
   );
 }
//main  

// Main data for shown
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}


export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const [rowSelection, setRowSelection] = useState({});
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
    onColumnFiltersChange: setColumnFilters,
  });


  


  return (
    <div className="rounded-md border bg-slate-300">
      {/*For sorting */}
      {/*Filter dropdwown*/}
      <div className="flex items-center px-5 py-4">
        {/* Example of cloumn filter */}
        {/* <Input
          placeholder="Filter emails..."
          value={table.getColumn("company")?.getFilterValue() as string}
          onChange={handleChange}
          className="max-w-sm"
        /> */}

        {/* This is global filter it filter all data in table */}
         <Input
          placeholder="Filter data..."
          value={ filtering as string}
          onChange={(e)=> setFiltering(e.target.value)}
          className="max-w-sm"
        />

        {/* column toggle one */}
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }>
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu> */}

        {/* Column Toggle two*/}
        <DataTableViewOptions table={table} />
      </div>
      {/* Table with data */}
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}

          {/* Search input based on header */}
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableCell key={header.id}>
                    {header.column.getCanFilter() ? (
                      <div>
                        <Input type="text" placeholder="search" />
                      </div>
                    ) : null}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>

        {/* Table body */}
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Buttons for pagination */}
      <div className="flex items-center justify-start space-x-2 px-5 py-5">
        {/* <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}>
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}>
          Next
        </Button> */}

        {/* Number of selected row */}
        <div className="px-3 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}
