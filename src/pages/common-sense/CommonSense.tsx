import React from "react";
import Sense from "../../components/sense/Sense";

const dummyData = [
  {
    senseId: 6,
    writerName: "개발팀유진",
    title: "부동산 상식 제목 2",
    likeCount: 0,
    favoriteCount: 0,
    isPublic: "Y",
    status: "N",
    createdAt: "2023-09-11T02:45:18.000",
  },
  {
    senseId: 5,
    writerName: "개발팀신우현",
    title: "부동산 상식 제목 2",
    likeCount: 0,
    favoriteCount: 0,
    isPublic: "N",
    status: "N",
    createdAt: "2023-09-11T02:45:17.000",
  },
  {
    senseId: 2,
    writerName: "개발팀장성호",
    title: "부동산 상식 제목 2",
    likeCount: 0,
    favoriteCount: 2,
    isPublic: "Y",
    status: "Y",
    createdAt: "2023-09-07T02:22:04.000",
  },
];

const CommonSense = () => {
  return (
    <div>
      {dummyData.map((data) => (
        <Sense
          key={data.senseId}
          senseId={data.senseId}
          writerName={data.writerName}
          title={data.writerName}
          likeCount={data.likeCount}
          favoriteCount={data.favoriteCount}
          isPublic={data.isPublic}
          status={data.status}
          createdAt={data.createdAt}
        />
      ))}
    </div>
  );
};

export default CommonSense;
