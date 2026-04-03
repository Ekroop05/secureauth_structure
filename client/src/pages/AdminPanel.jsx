import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid
} from "@mui/material";

export default function AdminPanel() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Admin Dashboard 
      </Typography>

      <Grid container spacing={3}>
        {/* Admin Access */}
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6">Access Level</Typography>
              <Typography sx={{ mt: 1 }}>
                You have <b>Admin</b> privileges
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* System Info */}
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6">System Status</Typography>
              <Typography sx={{ mt: 1 }}>
                All systems operational 
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Future Feature */}
        <Grid item xs={12}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6">Admin Controls</Typography>
              <Typography sx={{ mt: 1 }}>
                User management features coming soon...
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}