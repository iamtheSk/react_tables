import { Payment, columns } from "./columns";
import { DataTable} from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      amount: 100,
      status: "success",
      email: "salman@example.com",
      company: "Mylight sytems",
      panalname: "Black crystal ",
      phone: "+18598945042",
    },
    {
      id: "2",
      amount: 100,
      status: "pending",
      email: "Solomon@example.com",
      company: "Voltec Solar",
      panalname: "TARKA 138 VSBD",
      phone: "+17076253931",
    },
    {
      id: "3",
      amount: 100,
      status: "pending",
      email: "Dhanush@example.com",
      company: "Mylight sytems",
      panalname: "Black crystal ",
      phone: "+12602150302",
    },
    {
      id: "4",
      amount: 100,
      status: "pending",
      email: "AsokumarEs@example.com",
      company: "cloud venture",
      panalname: "TARKA 138 VSBD",
      phone: "+12697519932",
    },
    {
      id: "5",
      amount: 100,
      status: "success",
      email: "payone@example.com",
      company: "payone sytems",
      phone: "+17703424125",
      panalname: "Black crystal G3",
    },
    {
      id: "6",
      amount: 100,
      status: "pending",
      email: "hello@example.com",
      company: "hello sytems",
      panalname: "TARKA 138 VSBD",
      phone: "+18452367719",
    },
    {
      id: "7",
      amount: 100,
      status: "pending",
      email: "AsokumarPs@example.com",
      company: "AsokumarPs sytems",
      panalname: "Black crystal G3",
      phone: "+13804592741",
    },
    {
      id: "8",
      amount: 100,
      status: "success",
      email: "AsokumarEs@gmail.com",
      company: "AsokumarEs sytems",
      panalname: "Black crystal",
      phone: "+18452367719",
    },
    {
      id: "9",
      amount: 100,
      status: "pending",
      email: "AsokumarTv@example.com",
      company: "AsokumarTv ",
      panalname: "Tarak",
      phone: "+17436083054",
    },
    {
      id: "10",
      amount: 100,
      status: "pending",
      email: "Asokumargc@outlook.com",
      company: "Asokumar Group of companiens",
      panalname: "Black crystal G3",
      phone: "+14027678345",
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-8  ">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
