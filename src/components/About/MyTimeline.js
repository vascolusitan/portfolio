import React from "react";
import Timeline from "@mui/lab/Timeline";
import MyTimelineItem from "./MyTimelineItem";
import { PiDesktopTowerFill } from "react-icons/pi";
import { IoMdSchool } from "react-icons/io";

function MyTimeline() {
  return (
    <Timeline position="alternate">
      <MyTimelineItem
        date="2015 - 2018"
        title="Bachelor's Degree in Computer Engineering"
        text="Polytechnic of Oporto - School of Engineering"
        icon={<IoMdSchool />}
      />
      <MyTimelineItem
        date="2018"
        title="Fullstack Developer"
        text="Helppier - Interactive Tutorials"
        icon={<PiDesktopTowerFill />}
      />
      <MyTimelineItem
        date="2018 - 2021"
        title="Master's Degree in Software Engineering"
        text="Polytechnic of Oporto - School of Engineering"
        icon={<IoMdSchool />}
      />
      <MyTimelineItem
        date="2019 - 2023"
        title="Fullstack Developer"
        text="CGI - Water &amp; Energy ERP"
        icon={<PiDesktopTowerFill />}
      />
      <MyTimelineItem
        date="2023 - Present"
        title="Fullstack Developer"
        text="Kuehne + Nagel - Logistics"
        icon={<PiDesktopTowerFill />}
      />
    </Timeline>
  );
}

export default MyTimeline;
