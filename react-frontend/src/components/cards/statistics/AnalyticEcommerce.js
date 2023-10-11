import PropTypes from 'prop-types';

// material-ui
import { Box, Chip, Grid, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assetsl
import { RiseOutlined, FallOutlined } from '@ant-design/icons';

const AnalyticEcommerce = ({ color, title, name, percentage, isLoss, extra }) => (
  
  <MainCard contentSX={{ p: 2.25 }}>
    <Stack spacing={0.5}>
      <Typography variant="h6" color="textSecondary">
        {title}
      </Typography>
      <Grid container alignItems="center">
        <Grid item>
          <Typography variant="h4" color="inherit">
            {name}
          </Typography>
        </Grid>
        {percentage && (
          <Grid item>
            <Chip
              variant="combined"
              color={color}
              icon={
                <>
                  {!isLoss && <RiseOutlined style={{ fontSize: '0.75rem', color: 'inherit' }} />}
                  {isLoss && <FallOutlined style={{ fontSize: '0.75rem', color: 'inherit' }} />}
                </>
              }
              label={<>
                {!isLoss && <a>Safe</a>}
                {isLoss && <a>needs to check</a>}
              </>}
              sx={{ ml: 1.25, pl: 1 }}
              size="small"
            />
          </Grid>
        )}
      </Grid>
    </Stack>
    <Box sx={{ pt: 2.25 }}>
      {!isLoss && <Typography variant="caption" color="textSecondary">
        The appointment will end in {' '}
        <Typography component="span" variant="caption" sx={{ color: `${color || 'primary'}.main` }}>
          {extra}
        </Typography>{' '}
        minutes
      </Typography>}
      {isLoss && <Typography variant="caption" color="textSecondary">
        The appointment ended {' '}
        <Typography component="span" variant="caption" sx={{ color: `${color || 'primary'}.main` }}>
          {extra}
        </Typography>{' '}
        minutes ago, but yet checked out!
      </Typography>}
    </Box>
  </MainCard>
  
);

AnalyticEcommerce.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  percentage: PropTypes.number,
  isLoss: PropTypes.bool,
  extra: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};

AnalyticEcommerce.defaultProps = {
  color: 'primary'
};

export default AnalyticEcommerce;
