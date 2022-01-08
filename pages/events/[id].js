import React from "react";
import { useRouter } from "next/router";

function EventDetail() {
  let router = useRouter();
  console.log("Router --->", router);
  console.log("Router query --->", router.query);
  return <div>Event Detail Page {router.query.id}</div>;
}

export default EventDetail;
