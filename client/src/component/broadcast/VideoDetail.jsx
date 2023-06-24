import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BroadcastChannel from "./BroadCastNavbar";
import { Videos, Loader } from "./";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import Navbar from "../Navbar";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <>
      <Navbar />
      <Box minHeight="90vh" bgcolor="#e6dfdf">
        <Stack direction={{ xs: "column", md: "row" }}>
          <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" mt={1} >
            <Videos videos={videos} direction="column" />
          </Box>
          <Box flex={1}>
            <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
              <Typography color="#000" variant="h5" fontWeight="bold" p={2}>
                {title}
              </Typography>
              <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
                <Link to={`/channel/${channelId}`}>
                  <Typography variant={{ sm: "subtitle1", md: 'h6' }} color="#000" >
                    {channelTitle}
                    <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                  </Typography>
                </Link>
                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant="body1" sx={{ opacity: 0.7 }} color="primary">
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.7 }} color="primary">
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>

        </Stack>
      </Box>
    </>

  );
};

export default VideoDetail;