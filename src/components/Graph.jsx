import Highcharts from "highcharts";
import React from "react";
import { useEffect } from "react";

function Graph({ userList }) {
  const marksData = userList.map((user) => Number(user.mark));
  useEffect(() => {
    Highcharts.chart("container", {
      chart: {
        type: "column",
      },
      title: {
        text: "Student Marklist Analysis",
        align: "left",
      },
      subtitle: {
        text: "student list",
      },
      xAxis: {
        categories: ["Student1", "Student2", "Student3"],
        crosshair: true,
        accessibility: {
          description: "Student list",
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: "Marks in Decimal",
        },
      },
      tooltip: {
        valueSuffix: "Marks",
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "Students",
          data: marksData,
        },
      ],
    });
  }, [marksData]);
  return <div id="container" />;
}

export default Graph;
