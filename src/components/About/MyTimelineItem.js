import React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

function MyTimelineItem(props) {
  const { date, icon, title, text } = props;
  return (
    <TimelineItem>
      <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
        {date}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot sx={{ bgcolor: "#48ad57" }}>{icon}</TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography variant="h6" component="span" color="#5ff885">
          {title}
        </Typography>
        <Typography>{text}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

export default MyTimelineItem;
