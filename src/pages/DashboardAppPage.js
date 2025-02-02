import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';

// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const userName = localStorage.user;

  const newsList = [
    {
      id: faker.datatype.uuid(),
      title: 'DarkBeam Leaks Billions of Credentials via Unsecured Elasticsearch and Kibana Interface.',
      description: "The leaked data, including email and password pairs, provides cybercriminals with almost limitless attack capabilities",
      link: 'https://securityaffairs.com/151566/security/darkbeam-data-leak.html?&web_view=true',
      image: `/assets/images/covers/cover_1.jpg`,
      postedAt: faker.date.recent(),
    },
    {
      id: faker.datatype.uuid(),
      title: 'New AtlasCross Hackers Use American Red Cross as Phishing Lure',
      description: faker.name.jobTitle(),
      link: 'https://www.bleepingcomputer.com/news/security/new-atlascross-hackers-use-american-red-cross-as-phishing-lure/?&web_view=true',
      image: `/assets/images/covers/cover_2.jpg`,
      postedAt: faker.date.recent(),
    },
    {
      id: faker.datatype.uuid(),
      title: 'Github Repositories Bombarded by Info-Stealing Commits Masked as Dependabot',
      description: "Github Repositories Bombarded by Info-Stealing Commits Masked as Dependabot",
      link: 'https://www.bleepingcomputer.com/news/security/github-repos-bombarded-by-info-stealing-commits-masked-as-dependabot/?&web_view=true',
      image: `/assets/images/covers/cover_3.jpg`,
      postedAt: faker.date.recent(),
    },
    {
      id: faker.datatype.uuid(),
      title: 'Philippines State Health Organization Struggling to Recover From Ransomware Attack',
      description: "The Philippine Health Insurance Corporation (PhilHealth), which manages the country's universal healthcare system, has been hit by a ransomware attack. ",
      link: 'https://therecord.media/philippines-state-health-insurer-struggles-with-ransomware?&web_view=true',
      image: `/assets/images/covers/cover_4.jpg`,
      postedAt: faker.date.recent(),
    },
    {
      id: faker.datatype.uuid(),
      title: 'Pension Firms Report 4000% Surge in Breachesk',
      description: "Pension providers reported a staggering quadruple-digit percentage increase in data breaches to the UK regulator last year, according to new data compiled by professional services firm RPC.",
      link: 'https://www.infosecurity-magazine.com/news/pension-firms-report-4000-surge/?&web_view=true',
      image: `/assets/images/covers/cover_4.jpg`,
      postedAt: faker.date.recent(),
    },
  ];

  const capitalizeFirstLetter = (str) => {
    if (!str) {
      return '';
    }
    let capitalized = '';

    try {
      capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    } catch (e) {
      return '';
    }
    // converting first letter to uppercase

    return capitalized || '';
  };



  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard | NetPro IDS-IPS </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back {capitalizeFirstLetter(userName)}
        </Typography>

        <iframe title="Threat map" src="https://threatmap.checkpoint.com/" style={{ width: '100%', height: '500px' }} />

        <Grid container spacing={3}>
          {/* <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Weekly Sales" total={714000} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="New Users" total={1352831} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Item Orders" total={1723315} color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Bug Reports" total={234} color="error" icon={'ant-design:bug-filled'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Website Visits"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Current Visits"
              chartData={[
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid> */}
          {/* 
          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Conversion Rates"
              subheader="(+43%) than last year"
              chartData={[
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ]}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Current Subject"
              chartLabels={['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math']}
              chartData={[
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid> */}

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate title="Latest Cybersecurity News" list={newsList} />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid> */}
          {/* 
          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Traffic by Site"
              list={[
                {
                  name: 'FaceBook',
                  value: 323234,
                  icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} />,
                },
                {
                  name: 'Google',
                  value: 341212,
                  icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} />,
                },
                {
                  name: 'Linkedin',
                  value: 411213,
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} />,
                },
                {
                  name: 'Twitter',
                  value: 443232,
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} />,
                },
              ]}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
              ]}
            />
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
}
