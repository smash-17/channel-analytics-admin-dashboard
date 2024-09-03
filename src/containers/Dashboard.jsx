import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import LatestVideoCard from "../components/LatestVideoCard";
import ColorText from "../components/ColorText";

function Dashboard() {
  return (
    <Box>
      <Typography sx={styles.pageTitle} variant="h5">
        Dashboard
      </Typography>
      <Box sx={styles.columnsContainer}>
        <LatestVideoCard sx={styles.item} />
        <Card sx={styles.item}>
          <CardContent>
            <Typography variant="cardTitle">Latest Post</Typography>
            <Box sx={styles.postAuthorSection}>
              <Avatar sx={styles.avatar} src="src/assets/avatars/masoud.jpeg" />
              <Typography sx={styles.postMeta}>React with me</Typography>
              <Typography sx={styles.postMeta}>Sep 12,2023</Typography>
            </Box>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              eveniet harum accusamus esse.
            </Typography>
            <Divider sx={styles.divider} />
            <Box sx={styles.postStats}>
              <Typography variant="body2">Likes</Typography>
              <Typography variant="body2">comments</Typography>
              <Typography variant="h6">12</Typography>
              <Typography variant="h6">6</Typography>
            </Box>
            <Typography sx={styles.cardAction} variant="link">
              GO TO COMMUNITY TAB
            </Typography>
          </CardContent>
        </Card>

        <Card sx={styles.item}>
          <CardContent>
            <Typography variant="cardTitle">Channel analytics</Typography>
            <Typography variant="h7">Current subscribers</Typography>
            <Typography variant="h4">4144</Typography>
            <Typography variant="cardTitle">
              <ColorText color={"green.main"}>+77</ColorText>
              <ColorText color={"neutral.normal"}>in last 28 days</ColorText>
            </Typography>
            <Divider sx={styles.divider} />
            <Typography variant="h6">Summary</Typography>
            <Typography variant="h8">
              <ColorText color={"neutral.normal"}>in last 28 days</ColorText>
            </Typography>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">Views</Typography>
              <Typography variant="h7">225</Typography>
            </Box>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">Watch Time(hours)</Typography>
              <Typography variant="h7">30</Typography>
            </Box>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">Estimated Revenue</Typography>
              <Typography variant="h7">$450</Typography>
            </Box>
            <Divider sx={styles.divider} />
            <Typography variant="h6">Top Videos</Typography>
            <Typography variant="h8">
              <ColorText color={"neutral.normal"}>Last 48 hours</ColorText>
            </Typography>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">
                How to become a software developer in 2023
              </Typography>
              <Typography variant="h7">450</Typography>
            </Box>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">
                Css Grid tutorial: how to use Grids to make awesome interfaces
              </Typography>
              <Typography variant="h7">280</Typography>
            </Box>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">
                Call APIS in react native: practical guide
              </Typography>
              <Typography variant="h7">130</Typography>
            </Box>
            <Typography sx={styles.cardAction} variant="link">
              GO TO VIDEO ANALYTICS
            </Typography>
          </CardContent>
        </Card>

        <Card sx={styles.item}>
          <CardContent>
            <Typography variant="cardTitle">Latest Comments</Typography>
            <Typography variant="h7">
              <ColorText color="neutral.normal">
                Channel comments I haven't responded to
              </ColorText>
            </Typography>
            <Box sx={styles.commentRow}>
              <Avatar
                sx={styles.avatar}
                alt="Masoud"
                src="src/assets/avatars/masoud.jpeg"
              />
              <Box>
                <Box sx={styles.commentDetailsSection}>
                  <Typography sx={styles.postMeta}>
                    React with Masoud
                  </Typography>
                  <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                </Box>

                <Typography sx={styles.commentText}>
                  Get tips from a successful creator on how to take a YouTube
                  channel and turn it into a business that earns you money
                </Typography>
              </Box>
              <Box
                component="img"
                sx={styles.videoThumbnail}
                src="src/assets/thumbnail.png"
              />
            </Box>
            <Divider sx={styles.divider} />
            <Box sx={styles.commentRow}>
              <Avatar
                sx={styles.avatar}
                alt="Masoud"
                src="src/assets/avatars/masoud.jpeg"
              />
              <Box>
                <Box sx={styles.commentDetailsSection}>
                  <Typography sx={styles.postMeta}>
                    React with Masoud
                  </Typography>
                  <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                </Box>

                <Typography sx={styles.commentText}>
                  How can I deploy this?
                </Typography>
              </Box>
              <Box
                component="img"
                sx={styles.videoThumbnail}
                src="src/assets/thumbnail.png"
              />
            </Box>
            <Divider sx={styles.divider} />
            <Box sx={styles.commentRow}>
              <Avatar
                sx={styles.avatar}
                alt="Masoud"
                src="src/assets/avatars/masoud.jpeg"
              />
              <Box>
                <Box sx={styles.commentDetailsSection}>
                  <Typography sx={styles.postMeta}>
                    React with Masoud
                  </Typography>
                  <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                </Box>

                <Typography sx={styles.commentText}>
                  Thank you was very helpful.
                </Typography>
              </Box>
              <Box
                component="img"
                sx={styles.videoThumbnail}
                src="src/assets/thumbnail.png"
              />
            </Box>
            <Typography sx={styles.cardAction} variant="link">
              VIEW MORE
            </Typography>
          </CardContent>
        </Card>

        <Card sx={styles.item}>
          <CardContent sx={styles.ideaContent}>
            <Box>
              <Typography variant="cardTitle">Ideas for you</Typography>
              <Typography sx={styles.ideaQuestion}>
                Ready to get business savvy?
              </Typography>
              <Typography variant="h7">
                Get tips from a successful creator on how to take a YouTube
                channel and turn it into a business that earns you money
              </Typography>
              <Typography sx={styles.cardAction} variant="link">
                GET STARTED NOW
              </Typography>
            </Box>
            <Box
              component="img"
              sx={styles.ideaImage}
              src="src/assets/study-icon.png"
            />
          </CardContent>
        </Card>

        <Card sx={styles.item}>
          <CardContent sx={styles.ideaContent}>
            <Box>
              <Typography variant="cardTitle">Creator Insider</Typography>
              <Box
                component="img"
                sx={styles.insiderImage}
                src="src/assets/thumbnail2.png"
              />
              <Typography sx={styles.ideaQuestion}>
                Ready to boost your skills using AI tools?
              </Typography>
              <Typography variant="h7">
                Get tips from a successful creator on how to take a YouTube
                channel and turn it into a business that earns you money
              </Typography>
              <Typography sx={styles.cardAction} variant="link">
                WATCH ON YOUTUBE
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

/**@type {import("@mui/material").SxProps}  */
const styles = {
  pageTitle: {
    mb: 2,
  },
  columnsContainer: {
    columns: "280px 3",
    maxWidth: 1400,
  },
  item: {
    mb: 2,
  },

  postAuthorSection: {
    display: "flex",
    alignItems: "center",
    my: 3,
  },
  avatar: {
    width: "30px",
    height: "auto",
    mr: 1,
  },

  postMeta: {
    mr: 1,
    fontSize: "0.8rem",
    color: "neutral.normal",
  },

  divider: {
    my: 2,
  },

  postStats: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    my: 3,
  },

  cardAction: {
    mt: 2,
  },

  videoStatsRow: {
    display: "flex",
    justifyContent: "space-between",
    mt: 2,
    "&hover": {
      color: "primary.main",
      cursor: "pointer",
    },
  },

  commentRow: {
    display: "flex",
    alignItems: "flex-start",
    mt: 2,
  },

  commentDetailsSection: {
    display: "flex",
    alignItems: "center",
  },

  commentText: {
    fontSize: "0.8rem",
    mt: 0.5,
    mr: 2,
  },

  videoThumbnail: {
    width: 80,
    ml: "auto",
  },

  ideaContent: {
    display: "flex",
  },

  ideaQuestion: {
    fontSize: "0.9rem",
    fontWeight: 500,
    my: 2,
  },

  ideaImage: {
    width: 80,
    alignSelf: "center",
    ml: 5,
  },

  insiderImage:{
    width:'100%',
    mt: 1
  }
};

export default Dashboard;
