import React from "react";
import {
  withStyles,
  WithStyles,
  createStyles,
  useTheme,
} from "@material-ui/core/styles";
import { ThemeWithColor } from "../../theme";
import { Box, TextField, useMediaQuery } from "@material-ui/core";
import Button from "../Button";

const styles = ({ spacing, palette }: ThemeWithColor) => createStyles({});

interface Props extends WithStyles<typeof styles> {
  onFormSubmit: () => void;
  longUrl: string;
  onLongUrlChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const ShortenUrlForm: React.FC<Props> = (props: Props) => {
  const { longUrl, onFormSubmit, onLongUrlChange, error = "" } = props;

  const theme: ThemeWithColor = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box display="flex" flexDirection={mobile ? "column" : "row"} p={6}>
      <TextField
        value={longUrl}
        placeholder="Enter Long URL"
        variant="outlined"
        fullWidth
        onChange={onLongUrlChange}
        error={error.length > 0}
        helperText={error}
        label="Long URL"
        autoFocus
      />
      <Box
        mb={mobile ? 0 : 3}
        mt={mobile ? 2 : 0}
        flexDirection={mobile ? "column" : "row"}
        display="flex"
      >
        <Button onClick={onFormSubmit} fullWidth={mobile} />
      </Box>
    </Box>
  );
};

export default withStyles(styles as any)(ShortenUrlForm);
