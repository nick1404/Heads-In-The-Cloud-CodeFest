
// material-ui
import {
  Grid,
  Typography
} from '@mui/material';

// project import
import OrdersTable from './OrdersTable';
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import Button from '@mui/material/Button';

// ==============================|| DASHBOARD - DEFAULT ||============================== //
const users = [
  {
      "workerName" : "Anna",
      "workingHour": 2,
      "workingPlace": "11, Example Street, EX1 EXP",
      "startTimeStamp" : 1697037164,
      "color" : "success",
      "minutes" : 20,
      "isloss": false
  }, 
  {
      "workerName" : "Betty",
      "workingHour": 2,
      "workingPlace": "12, Example Street, EX3 EXP",
      "startTimeStamp" : 1697031234,
      "color" : "success",
      "minutes": 40,
      "isloss": false
  },
  {
      "workerName" : "Charlie",
      "workingHour": 3,
      "workingPlace": "14, Example Street, EX1 EXP",
      "startTimeStamp" : 169701252,
      "color": "warning",
      "minutes": "20",
      "isloss":true
  }
]
import { useNavigate} from  'react-router-dom';





const DashboardDefault = () => {
  const navigate = useNavigate();
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Dashboard</Typography>
      </Grid>
      
        {users.map((user) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={user.workerName} >
          <AnalyticEcommerce title={user.workingPlace} name={user.workerName} percentage={27.4} isLoss={user.isloss} color={user.color} extra={user.minutes}/>
          {!user.isloss && <Button variant="contained" color="success"  onClick = {()  => navigate("/detail")}>
        check
          </Button> }
          {user.isloss && <Button variant="contained" color="error"  onClick = {()  => navigate("/detail")}>
        CHECK
          </Button> }
        </Grid>
        ))}

      
      

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      {/* row 3 */}
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">History Records</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <OrdersTable />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
