import { IconButton, Grid, Typography, lighten } from "@mui/material";
import { FC } from "react";
import Image from "next/image";
import { recruiters } from "../../data/recruiters";
import { Link } from "../link";

export const RecruitersList: FC = () => {
  return (
    <>
      <Typography variant="h6" component="h4" mb={4}>
        Recruiters
      </Typography>
      <Grid container spacing={3}>
        {Object.keys(recruiters)
          .sort()
          .map((key) => {
            const {
              displayName,
              websiteUrl,
              websiteDisplayName,
              linkedInJobsUrl,
            } = recruiters[key];
            return (
              <Grid item key={key} xs={12}>
                <Typography variant="body1" component="h5">
                  {displayName}
                </Typography>
                <Typography variant="body2" component="p">
                  <Link
                    underline="hover"
                    color="secondary"
                    href={websiteUrl}
                    target="_blank"
                  >
                    {websiteDisplayName ||
                      websiteUrl
                        .replace(/^https?:\/\//, "")
                        .replace(/\/$/, "")
                        .split("?")[0]}
                  </Link>
                </Typography>
                {/* get better icons and use svgs and SvgIcon from MUI */}
                {linkedInJobsUrl && (
                  <Link
                    underline="hover"
                    href={linkedInJobsUrl}
                    target="_blank"
                    sx={{
                      display: "block",
                      "&:hover": {
                        "& .MuiIconButton-root": {
                          background: lighten("#0e50b4", 0.25),
                        },
                      },
                    }}
                  >
                    <IconButton
                      sx={{
                        background: "#0e50b4",
                        mt: 0.5,
                      }}
                    >
                      <Image
                        alt="LinkedIn"
                        src="/images/linkedin.png"
                        width={12}
                        height={12}
                      />
                    </IconButton>
                    <Typography
                      variant="body2"
                      component="p"
                      sx={{ display: "inline", marginLeft: 0.5 }}
                    >
                      LinkedIn Jobs
                    </Typography>
                  </Link>
                )}
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};
