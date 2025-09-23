// @mui
import { Box, Typography, Grid, Avatar, Button, Card, CardContent } from '@mui/material';

// Expanded sample data
const aboutUsData = [
  {
    id: '1',
    title: 'Integrity',
    description: 'We act with honesty, fairness, and transparency in everything we do.',
  },
  {
    id: '2',
    title: 'Innovation',
    description: 'We embrace creativity and seek to improve our products and services constantly.',
  },
  {
    id: '3',
    title: 'Customer First',
    description: 'We prioritize our customers’ needs and strive to exceed their expectations.',
  },
  {
    id: '4',
    title: 'Teamwork',
    description: 'Collaboration and respect are at the heart of our team culture.',
  },
  {
    id: '5',
    title: 'Sustainability',
    description: 'We are committed to responsible business practices and a greener future.',
  },
  {
    id: '6',
    title: 'Excellence',
    description: 'We pursue the highest standards in everything we do.',
  },
  {
    id: '7',
    title: 'Accountability',
    description: 'We take responsibility for our actions and outcomes.',
  },
  {
    id: '8',
    title: 'Empathy',
    description: 'We listen, understand, and support our colleagues and customers.',
  },
  {
    id: '9',
    title: 'Adaptability',
    description: 'We embrace change and adapt to challenges with agility.',
  },
  {
    id: '10',
    title: 'Passion',
    description: 'We are passionate about what we do and inspire others through our energy.',
  },
  {
    id: '11',
    title: 'Diversity',
    description: 'We celebrate differences and foster an inclusive environment.',
  },
  {
    id: '12',
    title: 'Trust',
    description: 'We build trust through consistency, transparency, and reliability.',
  },
];

export default function AboutValues() {
  const aboutus = aboutUsData;

  return (
    <>
      <Box sx={{ backgroundColor: '#f8f9fb', py: { xs: 6, lg: 12 } }}>
        <Typography
          textAlign="center"
          variant="h2"
          sx={{
            color: '#140a53',
            fontWeight: 'bold',
            mb: 2,
          }}
        >
          Our Values
        </Typography>
        <Typography
          textAlign="center"
          variant="body1"
          sx={{ color: '#140a53', fontWeight: 300, mb: 6 }}
        >
          Our values guide everything we do: how we create our product, and how we operate as a
          team.
        </Typography>

        <Grid container spacing={4} justifyContent="center" px={{ xs: 2, md: 8, lg: 16 }}>
          {aboutUsData.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  textAlign: 'center',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      mx: 'auto',
                      mb: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: '20px',
                    }}
                  >
                    {item.id}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: '700', mb: 1, color: '#140a53' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#140a53', fontWeight: 400 }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box p={{ lg: 4, xs: 4 }} alignSelf={'center'}>
        <Grid container px={{ lg: 12, md: 12 }} pt={4} spacing={6}>
          <Grid item lg={6}>
            <Typography sx={{ color: '#2275b7' }} variant="h2">
              Get Started
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: '100', color: '#140a53' }}>
              Download OurApp for free on the Google Play
              <br /> store – or sign up online today.
            </Typography>
          </Grid>
          <Grid item lg={6} sx={{ display: 'flex', justifyContent: 'end' }}>
            <Button
              variant="contained"
              sx={{ bgcolor: '#140a53' }}
              size="large"
              onClick={() => (window.location.href = 'https://Transup.com/login')}
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
