import React from "react";
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import { ThemeWithColor } from "../../theme";
import {
  Box,
  Typography,
  IconButton,
} from "@material-ui/core";
import { CopyIcon } from "../../assets/icons";

const styles = ({ spacing, palette }: ThemeWithColor) => createStyles({});

interface Props extends WithStyles<typeof styles> {
  onCopyClick: () => void;
  shortUrl: string;
}

const UrlDisplay: React.FC<Props> = (props: Props) => {
  const { shortUrl, onCopyClick } = props;

  return (
    <Box
      display="flex"
      alignItems="center"
      p={1}
      pl={2}
      pr={2}
      borderColor="primary.100"
      border={1}
      borderRadius={10}
      mt={2}
    >
      <Typography variant="h5">{shortUrl}</Typography>
      <Box color="secondary.400" ml={3}>
        <IconButton onClick={onCopyClick} color="inherit">
          <CopyIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default withStyles(styles as any)(UrlDisplay);
