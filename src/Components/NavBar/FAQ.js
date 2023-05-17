import { Box } from "@mui/material";
import React, { useState } from "react";

function FAQ() {
  const QuestionList = [
    // {
    //   question: "When is the event? and What is the exact location? ",
    //   answer:
    //     "Event location and Date and Time details given in Event details. Please check My Event page !!!",
    // },
    {
      question: "What are the parking arrangements and directions?",
      answer: "Yes We do have free Parking arrangemnts please check more details in event info.",
    },
    {
      question: "Can I register at the venue?",
      answer:
        "Yes, you can ! but if all registation is full then register at venue will not available. ",
    },
    {
      question: "If I have questions, who can I contact?",
      answer:
        "Please drop a message to us on contact us page.",
    },
  ];

  const imageLink =
    "https://images.unsplash.com/photo-1551590192-8070a16d9f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YWJvdXQlMjB1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

  const imageStyle = {
    backgroundImage: `url("Images/question.jpg")`,
    width: "650px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    opacity: "1.0",
    height: "450px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <>
      <Box className="container">
        <h1 style={{ padding: "20px" }}> Frequently asked Questions</h1>

        <Box
          style={{
            display: "flex",
            margin: "auto",
            marginTop: "10px",
            justifyContent: "space-around",
            lineHeight: "1.9",
            textAlign: "start",
          }}
        >
          <Box style={{ width: "50%", marginLeft: "50px" }}>
            <Box style={imageStyle}></Box>
          </Box>
          <Box
            style={{
              width: "50%",
              height: "100%",
              display: "grid",
              padding: "10px",
            }}
          >
            <h3> we know you have lot's of Question in your mind </h3>
            <h4 style={{ marginTop: "20px", fontSize: "14px" }}>
              Don't worry here we have given all common question that you might
              have !!!
            </h4>

            <Box style={{ textAlign: "start", marginTop: "20px" }}>
              <hr></hr>
              {QuestionList.map((QAset) => (
                <QuestionBox QuestionList={QAset} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

function QuestionBox({ QuestionList }) {
  const [answer, setAnswer] = useState(false);

  const click = () => {
    setAnswer(!answer);
  };

  const totalBoxStyle = {
    margin: "40px auto",
    width: "100%",
    height: answer ? "120px" : "40px",
    boxShadow: "2px 3px 3px 2px grey",
    textAlign: "start",
    borderRadius: "10px",
    background: "#F0F0F0",
  };

  const QuestionBoxStyle = {
    height: "40px",
    padding: "5px",
    marginLeft: "10px",
    display: "flex",
  };

  const AnswerBoxStyle = {
    display: answer ? "" : "none",
    height: "80px",
    padding: "5px",
    marginLeft: "10px",
    display: "flex",
  };

  return (
    <>
      <Box style={totalBoxStyle} onClick={click}>
        <Box style={QuestionBoxStyle}>Question : {QuestionList.question}</Box>
        <Box style={AnswerBoxStyle}>
          {answer ? ` Answer : ${QuestionList.answer}` : ""}
        </Box>
      </Box>
    </>
  );
}

export default FAQ;
