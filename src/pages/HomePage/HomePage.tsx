import React, { useState, useCallback, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  CircularProgress,
} from "@material-ui/core";
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import validator from "validator";
import { ThemeWithColor } from "../../theme";
import ShortenUrlForm from "../../components/ShortenUrlForm";
import { fetchShortUrl } from "../../api/dataApi";
import UrlDisplay from "../../components/UrlDisplay";
import ShareButtons from "../../components/ShareButtons";
import CustomSnackbar from "../../components/CustomSnackbar";
import { APP_ERRORS } from "../../utils/constants";
import ShouldRender from "../../components/ShouldRender";

const styles = ({ spacing, palette }: ThemeWithColor) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    heading: {
      textAlign: "center",
    },
  });

interface Props extends WithStyles<typeof styles> {}

const HomePage: React.FC<Props> = (props: Props) => {
  const { classes } = props;

  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [error, setError] = useState("");

  const onFormSubmit = useCallback(async () => {
    if (longUrl.length === 0) {
      setError(APP_ERRORS.EMPTY_URL);
      return;
    } else if (!validator.isURL(longUrl)) {
      setError(APP_ERRORS.INVALID_URL);
      return;
    }
    setLoading(true);
    const res = await fetchShortUrl(longUrl).catch((error) => {
      setError(error);
    });
    if (res) {
      setShortUrl(res.link);
    }
    setLoading(false);
  }, [longUrl, setShortUrl]);

  const onLongUrlChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (error.length) {
        setError("");
      }
      setLongUrl(e.target.value);
    },
    [setLongUrl, error, setError]
  );

  const onSnackbarClose = useCallback(() => {
    setSnackbarOpen(false);
  }, [setSnackbarOpen]);

  const copyToClipBoard = useCallback(() => {
    navigator.clipboard.writeText(shortUrl);
    setSnackbarOpen(true);
  }, [shortUrl]);

  useEffect(() => {
    if (shortUrl.length > 0) {
      copyToClipBoard();
    }
  }, [shortUrl]);

  return (
    <Container className={classes.container}>
      <Box mt={4}>
        <Typography className={classes.heading} variant="h3">
          Convert large URLs to short ones.
        </Typography>
        <Typography className={classes.heading} variant="h3">
          For easy readibily and a cleaner look on your social media posts.
        </Typography>
      </Box>
      <Box width={"80%"} mt={4}>
        <Paper>
          <ShortenUrlForm
            longUrl={longUrl}
            onLongUrlChange={onLongUrlChange}
            onFormSubmit={onFormSubmit}
            error={error}
          />
          <ShouldRender if={loading}>
            <Box
              p={2}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <CircularProgress />
            </Box>
          </ShouldRender>
          <ShouldRender if={shortUrl.length > 0 && !loading}>
            <Box
              p={2}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Typography variant="h4">Shortened URL:</Typography>
              <UrlDisplay shortUrl={shortUrl} onCopyClick={copyToClipBoard} />
              <Box
                mt={5}
                display="flex"
                alignItems="center"
                flexDirection="column"
              >
                <Typography variant="h4">Share: </Typography>
                <ShareButtons shortUrl={shortUrl} />
              </Box>
            </Box>
          </ShouldRender>
        </Paper>
      </Box>
      <CustomSnackbar
        snackbarOpen={snackbarOpen}
        severity="info"
        text={`${shortUrl} copied to clipboard`}
        duration={4000}
        onSnackbarClose={onSnackbarClose}
      />
    </Container>
  );
};

export default withStyles(styles as any)(HomePage);
