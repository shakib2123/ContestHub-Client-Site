import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Contest from "./Contest";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";

const AllContest = () => {
  const axiosSecure = useAxios();
  const [type, setType] = useState("");
  const categories = ["salad", "soup", "dessert", "pizza", "drinks"];
  const initialIndex = categories.indexOf(0);
  const [tab, setTab] = useState(initialIndex);
  console.log(tab);
  const {
    data: allContest = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["allContest"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contests");
      return res.data;
    },
  });
  console.log(allContest);

  return (
    <div className="max-w-7xl mx-auto">
      <Tabs defaultIndex={tab} onSelect={(index) => setTab(index)}>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>SOUP</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>PIZZA</Tab>
          <Tab>DRINKS</Tab>
        </TabList>

        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {allContest.map((contest) => (
          <Contest key={contest._id} contest={contest}></Contest>
        ))}
      </div>
    </div>
  );
};

export default AllContest;
