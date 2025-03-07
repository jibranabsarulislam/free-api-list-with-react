import React from "react";
import { Box, Typography, Link } from "@mui/material";

// Formatting for contribution -

/* <Typography>

    Desired Name - Date (Formatted Month in words, date, year)

        <Link url="(your social URL Link here, 1 link only)"
            target="_blank"
            rel="noopener noreferrer"
        >
        Social Link Text (Max 15 characters) 

        </Link>
    </Typography> 
*/

const ContributorsContent = () => {
  return (
    <Box sx={{ border: "solid 1px #333333" }}>
      <Typography>Contributors List</Typography>
      <Box>
        <Typography>
          Curtis Thomas - June 10th 2023{" "}
          <Link
            href="https://github.com/Curtis-Thomas"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </Typography>
        <Typography>
          ###<Link>###</Link>###
        </Typography>
        <Typography>
          ###<Link>###</Link>###
        </Typography>
        <Typography>
          ###<Link>###</Link>###
        </Typography>
        <Typography>
          ###<Link>###</Link>###
        </Typography>
        <Typography>
          ###<Link>###</Link>###
        </Typography>
      </Box>
    </Box>
  );
};

export default ContributorsContent;
