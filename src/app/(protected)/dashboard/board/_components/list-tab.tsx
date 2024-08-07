"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  ColumnFiltersState,
  VisibilityState,
  getFilteredRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { Plus, Settings2, X } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { DataTablePagination } from "./list-pagination";

interface ListTabProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function ListTab<TData, TValue>({
  columns,
  data,
}: ListTabProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  });

  const selectedStatus =
    (table.getColumn("status")?.getFilterValue() as string) ?? "";
  const selectedPriority =
    (table.getColumn("priority")?.getFilterValue() as string) ?? "";
  const selectedTag =
    (table.getColumn("tag")?.getFilterValue() as string) ?? "";

  const clearFilters = () => {
    table.getColumn("title")?.setFilterValue("");
    table.getColumn("status")?.setFilterValue("");
    table.getColumn("priority")?.setFilterValue("");
    table.getColumn("tag")?.setFilterValue("");
  };

  const hasActiveFilters =
    selectedStatus ||
    selectedPriority ||
    selectedTag ||
    (table.getColumn("title")?.getFilterValue() as string);

  return (
    <div className="w-full">
      <div className="flex items-center pb-4">
        <div className="flex items-center gap-4">
          <Input
            placeholder="Filter tasks..."
            value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("title")?.setFilterValue(event.target.value)
            }
            className="w-80 rounded-[10px]"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="ml-auto flex items-center gap-1 rounded-[10px] border-dashed"
              >
                <Plus className="size-3" />
                Status{" "}
                {selectedStatus && (
                  <div className="ml-1 flex items-center gap-2">
                    <Separator orientation="vertical" className="h-4" />
                    <p className="rounded-[10px] bg-muted px-2 py-1 text-xs capitalize">
                      {selectedStatus}
                    </p>
                  </div>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuRadioGroup
                value={selectedStatus}
                onValueChange={(value) =>
                  table.getColumn("status")?.setFilterValue(value)
                }
              >
                <DropdownMenuRadioItem value="backlog">
                  Backlog
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="todo">
                  To Do
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="in progress">
                  In Progress
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="to review">
                  To Review
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="done">Done</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="ml-auto flex items-center gap-1 rounded-[10px] border-dashed"
              >
                <Plus className="size-3" />
                Priority{" "}
                {selectedPriority && (
                  <div className="ml-1 flex items-center gap-2">
                    <Separator orientation="vertical" className="h-4" />
                    <p className="rounded-[10px] bg-muted px-2 py-1 text-xs capitalize">
                      {selectedPriority}
                    </p>
                  </div>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuRadioGroup
                value={selectedPriority}
                onValueChange={(value) =>
                  table.getColumn("priority")?.setFilterValue(value)
                }
              >
                <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="medium">
                  Medium
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="ml-auto flex items-center gap-1 rounded-[10px] border-dashed"
              >
                <Plus className="size-3" />
                Tag{" "}
                {selectedTag && (
                  <div className="ml-1 flex items-center gap-2">
                    <Separator orientation="vertical" className="h-4" />
                    <p className="rounded-[10px] bg-muted px-2 py-1 text-xs capitalize">
                      {selectedTag}
                    </p>
                  </div>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuRadioGroup
                value={selectedTag}
                onValueChange={(value) =>
                  table.getColumn("tag")?.setFilterValue(value)
                }
              >
                <DropdownMenuRadioItem value="code">Code</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="design">
                  Design
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="code review">
                  Code Review
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="research">
                  Research
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bug">Bug</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="enchantment">
                  Enchantment
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="documentation">
                  Documentation
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="testing">
                  Testing
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="discussion">
                  Discussion
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="implementation">
                  Implementation
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="feedback">
                  Feedback
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="refactoring">
                  Refactoring
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          {hasActiveFilters && (
            <Button
              variant="destructive"
              className="flex items-center gap-1 rounded-[10px]"
              onClick={clearFilters}
            >
              <X className="size-3" />
              Clear Filters
            </Button>
          )}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="ml-auto flex items-center gap-1 rounded-[10px]"
            >
              <Settings2 className="size-3" />
              View
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
            <DropdownMenuSeparator />
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
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-[10px] border">
        <Table>
          <TableHeader className="bg-foreground2">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-sm">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="capitalize">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <DataTablePagination table={table} />
      </div>
    </div>
  );
}
