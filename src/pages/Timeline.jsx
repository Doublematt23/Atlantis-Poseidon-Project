/*-------------------------------------------------------------------------*
*---									
*---        Timeline.jsx						
*---									
*---            This file contains the code responsible for the application
*---        timeline.
*---	   		
*---	----	----	----	----	----	----	----	----	---*
*---									
*---        Version 1.0     2024 March 21st     	  	
*---		       	
*-------------------------------------------------------------------------*/

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
        marginTop: "50px",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        background: "#f5f5f5",
      }}
    >
      <Timeline mode="alternate" style={{ marginTop: "20px" }}>
        {timelineData.map((item) => (
          <Timeline.Item
            key={item.id}
            label={
              <span
                style={{
                  color: "#1890ff",
                  fontSize: "16px",
                  display: "block",
                }}
              >
                {new Date(item.due_date).toLocaleDateString()}
              </span>
            }
            color="blue"
            style={{ paddingBottom: "20px" }}
          >
            <div
              style={{
                padding: "10px",
                background: "#fff",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                marginBottom: "10px",
                textAlign: "center",
              }}
            >
              <h1
                style={{
                  color: "#003a8c",
                  fontSize: "36px",
                  fontWeight: "600",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
              >
                {item.title}
              </h1>
              <p
                style={{
                  color: "#545454",
                  lineHeight: "1.5",
                }}
              >
                {item.description}
              </p>
            </div>
          </Timeline.Item>
        ))}
      </Timeline>
    </Card>
  );
};

export default TimelineComponent;
