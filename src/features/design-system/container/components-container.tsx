import React from "react";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import { Skeleton } from "@/shared/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";

export default function ComponentsContainer() {
  return (
    <div className="space-y-16 pb-16">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Components</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Library of reusable UI components built with Shadcn.
        </p>
      </div>

      <div className="space-y-12">
        {/* Buttons */}
        <section className="space-y-6 border-b pb-12">
          <h2 className="text-2xl font-semibold">Buttons</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>

        {/* Inputs */}
        <section className="space-y-6 border-b pb-12">
          <h2 className="text-2xl font-semibold">Inputs</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <label className="text-sm font-medium">Default Input</label>
              <Input placeholder="Type something..." />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Disabled Input</label>
              <Input placeholder="Disabled" disabled />
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="space-y-6 border-b pb-12">
          <h2 className="text-2xl font-semibold">Cards</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content goes here.</p>
              </CardContent>
              <CardFooter>
                <Button>Action</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Avatars */}
        <section className="space-y-6 border-b pb-12">
          <h2 className="text-2xl font-semibold">Avatars</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </section>

        {/* Dialog & Skeleton */}
        <section className="space-y-6 border-b pb-12">
          <h2 className="text-2xl font-semibold">Misc (Dialog & Skeleton)</h2>
          <div className="flex items-start gap-8">
            <Dialog>
              <DialogTrigger render={<Button variant="outline" />}>
                Open Dialog
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <div className="bg-card flex items-center space-x-4 rounded-lg border p-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>
          </div>
        </section>

        {/* Table */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Tables</h2>
          <div className="bg-card rounded-lg border">
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV002</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell>PayPal</TableCell>
                  <TableCell className="text-right">$150.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>
      </div>
    </div>
  );
}
