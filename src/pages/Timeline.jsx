import React, { useState, useEffect } from "react";
import { Timeline, Card } from "antd";
import axios from "axios";

const TimelineComponent = () => {
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    const fetchTimelineData = async () => {
      try {
        const response = await axios.get(
          "http://34.204.247.99/timeline/read.php"
        );
        console.log(response);
        setTimelineData(response.data);
      } catch (error) {
        console.error("Error fetching timeline data:", error);
      }
    };

    fetchTimelineData();
  }, []);

  return (
    <Card
      style={{
        marginTop: "100px",
        margin: "20px",
        borderRadius: "15px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Timeline mode="alternate">
        {timelineData.map((item) => (
          <Timeline.Item key={item.id} label={item.due_date} color="blue">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Timeline.Item>
        ))}
      </Timeline>
    </Card>
  );
};

export default TimelineComponent;
