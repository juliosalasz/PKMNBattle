import React from "react";

export default function User({ params }) {
  console.log(params);
  return <div>User ID {params.id}</div>;
}
