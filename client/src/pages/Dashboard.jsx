import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Grid
} from "@mui/material";

export default function Dashboard() {
  const role = localStorage.getItem("role");

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Dashboard 
      </Typography>

      <Grid container spacing={3}>
        {/* User Info */}
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6">User Info</Typography>
              <Typography sx={{ mt: 1 }}>
                Role: <b>{role}</b>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Status */}
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6">Status</Typography>
              <Typography color="green" sx={{ mt: 1 }}>
                Logged in successfully 
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Button
        variant="contained"
        color="error"
        sx={{ mt: 4, borderRadius: 2 }}
        onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}
      >
        Logout
      </Button>
    </Container>
  );
}