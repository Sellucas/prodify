"use client";

import { ChevronsUpDown } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { formatDistanceToNow, parseISO } from "date-fns";

import { ICard } from "@/types";
import { Button } from "@/components/ui/button";
import CardUpdateForm from "./card-update-form";
import { Checkbox } from "@/components/ui/checkbox";
import { DialogDeleteCard } from "./card-delete-dialog";
import { CardTag } from "@/app/(protected)/dashboard/board/_components/card-tag";

const formatDate = (dateString: string) => {
  return formatDistanceToNow(parseISO(dateString));
};

export const columns: ColumnDef<ICard>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: "Task",
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-2 rounded-[10px]"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ChevronsUpDown className="ml-2 size-3" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="capitalize ml-2">{row.original.status}</div>;
    },
  },
  {
    accessorKey: "priority",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-2 rounded-[10px]"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Priority
          <ChevronsUpDown className="ml-2 size-3" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="capitalize ml-2">{row.original.priority}</div>;
    },
  },
  {
    accessorKey: "tag",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-2 rounded-[10px]"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tag
          <ChevronsUpDown className="ml-2 size-3" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <CardTag className="w-fit text-sm" name={row.original.tag} />;
    },
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-2 rounded-[10px]"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created At
          <ChevronsUpDown className="ml-2 size-3" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="ml-2">{formatDate(row.original.created_at)}</div>;
    },
  },
  {
    id: "actions",
    header: () => <div className="flex justify-end">Actions</div>,
    cell: ({ row }) => {
      const card = row.original;
      return (
        <div className="flex items-center justify-end gap-4">
          <CardUpdateForm card={card} />
          <DialogDeleteCard card={card} className="size-4 text-red-600" />
        </div>
      );
    },
  },
];
